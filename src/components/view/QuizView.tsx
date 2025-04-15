"use client";

import { useEffect, useState, useCallback, useRef } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { Spinner } from "../ui/Spinner";

// types
import { WordListResponse } from "@/types";

interface QuizResponse {
  word: string;
  isCorrect: boolean;
  isNonWord: boolean;
  responseTime: number; // Time taken to respond
  isTimeout: boolean;
}

interface QuizViewProps {
  onComplete: () => void;
}

type QuizState = "instructions" | "quiz";

const TOTAL_WORDS = 100;
const STIMULUS_DURATION = 2000; // 2 seconds max per word
const INTER_STIMULUS_INTERVAL = 500; // 500ms blank screen

export default function QuizView({ onComplete }: QuizViewProps) {
  const [state, setState] = useState<QuizState>("instructions");
  const [currentList, setCurrentList] = useState<WordListResponse | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [showWord, setShowWord] = useState(true);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Timing references
  const stimulusStartTime = useRef<number>(0);
  const stimulusTimeout = useRef<NodeJS.Timeout | null>(null);
  const interStimulusTimeout = useRef<NodeJS.Timeout | null>(null);
  const handleResponseRef = useRef<
    ((isRealWord: boolean, isTimeout?: boolean) => void) | null
  >(null);

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const loadWordList = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/wordlists");

      if (!response.ok) {
        throw new Error("Failed to load word list");
      }

      const data = await response.json();
      setCurrentList(data);

      const allWords = [...data.words, ...data.nonWords];
      const selectedWords = shuffleArray(allWords).slice(0, TOTAL_WORDS);
      setShuffledWords(selectedWords);
      setCurrentWordIndex(0);

      // Start first trial
      startNewTrial();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const cleanupTimeouts = useCallback(() => {
    if (stimulusTimeout.current) {
      clearTimeout(stimulusTimeout.current);
      stimulusTimeout.current = null;
    }
    if (interStimulusTimeout.current) {
      clearTimeout(interStimulusTimeout.current);
      interStimulusTimeout.current = null;
    }
  }, []);

  const startNewTrial = useCallback(() => {
    setShowWord(true);
    stimulusStartTime.current = performance.now();

    // Set timeout for maximum stimulus duration
    stimulusTimeout.current = setTimeout(() => {
      if (currentWordIndex < TOTAL_WORDS && handleResponseRef.current) {
        // Pass true as second argument to indicate timeout
        handleResponseRef.current(false, true);
      }
    }, STIMULUS_DURATION);
  }, [currentWordIndex]);

  const submitQuizAttempt = useCallback(
    async (newResponses: QuizResponse[], score: number) => {
      if (!currentList) return;

      try {
        setIsSubmitting(true);
        // Calculate detailed statistics
        const correctWords = newResponses.filter(
          (r) => !r.isNonWord && r.isCorrect
        ).length;
        const incorrectWords = newResponses.filter(
          (r) => !r.isNonWord && !r.isCorrect
        ).length;
        const correctNonWords = newResponses.filter(
          (r) => r.isNonWord && r.isCorrect
        ).length;
        const incorrectNonWords = newResponses.filter(
          (r) => r.isNonWord && !r.isCorrect
        ).length;
        const npxionTime = Math.round(
          newResponses.reduce((sum, r) => sum + r.responseTime, 0)
        );

        const submitResponse = await fetch("/api/quiz/attempts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wordListId: currentList.id,
            responses: newResponses,
            score,
            correctWords,
            incorrectWords,
            correctNonWords,
            incorrectNonWords,
            npxionTime,
          }),
        });

        if (!submitResponse.ok) {
          throw new Error("Failed to submit quiz attempt");
        }

        onComplete();
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to submit results"
        );
      } finally {
        setIsSubmitting(false);
      }
    },
    [currentList, onComplete]
  );

  const handleResponse = useCallback(
    (isRealWord: boolean, isTimeout: boolean = false) => {
      if (!currentList || !shuffledWords[currentWordIndex]) return;

      // Clear any existing timeouts
      cleanupTimeouts();

      const currentWord = shuffledWords[currentWordIndex];
      const isNonWord = currentList.nonWords.includes(currentWord);
      const isCorrect = isTimeout ? false : isRealWord !== isNonWord;
      const responseTime = performance.now() - stimulusStartTime.current;

      const newResponse: QuizResponse = {
        word: currentWord,
        isCorrect,
        isNonWord,
        responseTime,
        isTimeout,
      };

      const newResponses = [...responses, newResponse];
      setResponses(newResponses);
      setShowWord(false);

      // Handle inter-stimulus interval
      interStimulusTimeout.current = setTimeout(() => {
        if (currentWordIndex < TOTAL_WORDS - 1) {
          setCurrentWordIndex(currentWordIndex + 1);
          startNewTrial();
        } else {
          // Calculate final score
          const timeoutCount = newResponses.filter((r) => r.isTimeout).length;

          // If all responses were timeouts, score is 0
          const score =
            timeoutCount === TOTAL_WORDS
              ? 0
              : Math.round(
                  (newResponses.filter((r) => r.isCorrect).length /
                    TOTAL_WORDS) *
                    100
                );

          submitQuizAttempt(newResponses, score);
        }
      }, INTER_STIMULUS_INTERVAL);
    },
    [
      currentList,
      currentWordIndex,
      shuffledWords,
      responses,
      submitQuizAttempt,
      startNewTrial,
      cleanupTimeouts,
    ]
  );

  // Store the latest handleResponse in a ref to avoid circular dependency
  useEffect(() => {
    handleResponseRef.current = handleResponse;
  }, [handleResponse]);

  useEffect(() => {
    loadWordList();
    return () => cleanupTimeouts();
  }, [loadWordList, cleanupTimeouts]);

  useEffect(() => {
    if (isMobile) return; // Early return for mobile devices - no keyboard controls

    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case "1":
        case "ArrowLeft":
          handleResponse(true);
          break;
        case "2":
        case "ArrowRight":
          handleResponse(false);
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isMobile, handleResponse]);

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={loadWordList}>Try Again</Button>
      </div>
    );
  }

  if (state === "instructions") {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            تعليمات الاختبار
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4 text-right">
            <p className="text-lg">كيفية الإجابة على الاختبار:</p>
            <ul className="list-disc list-inside space-y-2">
              <li>سيتم عرض {TOTAL_WORDS} كلمة عليك</li>
              <li>لديك ثانيتان للإجابة على كل كلمة</li>
              <li>
                إذا كانت الكلمة حقيقية في اللغة العربية، اضغط على زر &quot;كلمة
                حقيقية&quot; أو مفتاح السهم الأيمن (→)
              </li>
              <li>
                إذا كانت الكلمة غير حقيقية، اضغط على زر &quot;كلمة غير
                حقيقية&quot; أو مفتاح السهم الأيسر (←)
              </li>
              <li>
                إذا لم تجب خلال ثانيتين، سيتم اعتبار إجابتك &quot;كلمة غير
                حقيقية&quot;
              </li>
              <li>ستظهر شاشة فارغة لفترة قصيرة بين الكلمات</li>
            </ul>
          </div>
          <div className="flex justify-center pt-4">
            <Button
              onClick={() => {
                setState("quiz");
                loadWordList();
              }}
              className="w-full md:w-auto"
            >
              ابدأ الاختبار
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isLoading || !currentList || !shuffledWords.length) {
    return (
      <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
        <Spinner size="sm" />
        <p className="text-sm text-gray-500">
          {isSubmitting
            ? "Saving quiz results..."
            : "please wait while we load the quiz..."}
        </p>
      </div>
    );
  }

  const currentWord = shuffledWords[currentWordIndex];
  const progress = (currentWordIndex / TOTAL_WORDS) * 100;

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Card className="w-full p-6">
        <div className="text-center">
          <Progress value={progress} className="mb-6" />
          <div className="flex justify-center items-center h-[200px]">
            {showWord ? (
              <h2 className="text-3xl font-bold mb-8">{currentWord}</h2>
            ) : (
              <div className="h-full" />
            )}
          </div>

          <p className="text-sm text-gray-500 mb-4">
            {isMobile
              ? "اضغط على الزر للإجابة"
              : "استخدم مفاتيح الأسهم (← →) للإجابة"}
          </p>

          {isMobile && (
            <div className="flex justify-center gap-4">
              <Button
                variant="default"
                onClick={() => handleResponse(true)}
                className="w-full md:w-32 h-12 text-lg"
              >
                نعم
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleResponse(false)}
                className="w-full md:w-32 h-12 text-lg text-white"
              >
                لا
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
