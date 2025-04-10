"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useMediaQuery } from "../../hooks/useMediaQuery";
import { Loader2 } from "lucide-react";

interface WordList {
  id: string;
  words: string[];
  nonWords: string[];
}

interface QuizResponse {
  word: string;
  isCorrect: boolean;
  isNonWord: boolean;
  responseTime: number; // Time taken to respond
}

interface QuizViewProps {
  onComplete: (score: number) => void;
}

const TOTAL_WORDS = 100;
const STIMULUS_DURATION = 2000; // 2 seconds max per word
const INTER_STIMULUS_INTERVAL = 500; // 500ms blank screen

export default function QuizView({ onComplete }: QuizViewProps) {
  const [currentList, setCurrentList] = useState<WordList | null>(null);
  const [isLoading, setIsLoading] = useState(true);
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
  const handleResponseRef = useRef<((isRealWord: boolean) => void) | null>(
    null
  );

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
        handleResponseRef.current(false); // Default to "Non-Word" if no response
      }
    }, STIMULUS_DURATION);
  }, [currentWordIndex]);

  const submitQuizAttempt = useCallback(
    async (newResponses: QuizResponse[], score: number) => {
      if (!currentList) return;

      try {
        const submitResponse = await fetch("/api/quiz/attempts", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            wordListId: currentList.id,
            responses: newResponses,
            score,
            completionTime: new Date().toISOString(),
          }),
        });

        if (!submitResponse.ok) {
          throw new Error("Failed to submit quiz attempt");
        }

        onComplete(score);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to submit results"
        );
      }
    },
    [currentList, onComplete]
  );

  const handleResponse = useCallback(
    (isRealWord: boolean) => {
      if (!currentList || !shuffledWords[currentWordIndex]) return;

      // Clear any existing timeouts
      cleanupTimeouts();

      const currentWord = shuffledWords[currentWordIndex];
      const isNonWord = currentList.nonWords.includes(currentWord);
      const isCorrect = isRealWord !== isNonWord;
      const responseTime = performance.now() - stimulusStartTime.current;

      const newResponse: QuizResponse = {
        word: currentWord,
        isCorrect,
        isNonWord,
        responseTime,
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
          // Calculate final score and complete quiz
          const correctResponses = newResponses.filter(
            (r) => r.isCorrect
          ).length;
          const score = Math.round((correctResponses / TOTAL_WORDS) * 100);
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
    if (isMobile) return;

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

  if (isLoading || !currentList || !shuffledWords.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const currentWord = shuffledWords[currentWordIndex];
  const progress = (currentWordIndex / TOTAL_WORDS) * 100;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full p-6">
        <div className="text-center">
          <Progress value={progress} className="mb-6" />

          {showWord ? (
            <h2 className="text-3xl font-bold mb-8">{currentWord}</h2>
          ) : (
            <div className="h-[60px]" />
          )}
          <p className="text-sm text-gray-500 mb-4">
            {isMobile
              ? "Tap your response"
              : "Use arrow keys (← →) or numbers (1, 2) to respond"}
          </p>
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              onClick={() => handleResponse(true)}
              className="w-32"
            >
              Real Word
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleResponse(false)}
              className="w-32 text-white"
            >
              Non-Word
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
