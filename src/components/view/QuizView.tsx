"use client";

import { useEffect, useState, useCallback, useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useWordList } from "@/hooks/useWordList";

// components
import { Button } from "@/components/ui/button";
import { Spinner } from "../ui/Spinner";
import QuizCard from "./QuizCard";
import Instructions from "./Instructions";

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

const TOTAL_WORDS = 100;
const STIMULUS_DURATION = 2000; // 2 seconds max per word
const FEEDBACK_DURATION = 200; // 200ms for feedback display

export default function QuizView({ onComplete }: QuizViewProps) {
  const [state, setState] = useState<string>("instructions");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [showWord, setShowWord] = useState(true);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const isMobile = useMediaQuery("(max-width: 768px)");

  // Use the word list hook
  const {
    currentList,
    isLoading,
    error: wordListError,
    getNewWordList,
  } = useWordList();

  // Timing references
  const stimulusStartTime = useRef<number>(0);
  const stimulusTimeout = useRef<NodeJS.Timeout | null>(null);
  const interStimulusTimeout = useRef<NodeJS.Timeout | null>(null);
  const handleResponseRef = useRef<
    ((isRealWord: boolean, isTimeout?: boolean) => void) | null
  >(null);

  // Add quiz start time reference
  const quizStartTime = useRef<number>(0);

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
      setError(null);
      await getNewWordList();
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    }
  }, [getNewWordList]);

  const cleanupTimeouts = useCallback(() => {
    if (stimulusTimeout.current) {
      clearTimeout(stimulusTimeout.current);
      stimulusTimeout.current = null;
    }
    if (interStimulusTimeout.current) {
      clearTimeout(interStimulusTimeout.current);
      interStimulusTimeout.current = null;
    }
    // Reset state when cleaning up
    setShowWord(false);
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
        // Calculate total quiz duration
        const totalQuizDuration = Math.round(
          performance.now() - quizStartTime.current
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
            totalQuizDuration,
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

      // Clear any existing timeouts before proceeding
      cleanupTimeouts();

      const currentWord = shuffledWords[currentWordIndex];
      const isNonWord = currentList.nonWords.includes(currentWord);
      const isCorrect = isTimeout ? false : isRealWord !== isNonWord;
      const responseTime = performance.now() - stimulusStartTime.current;

      // Show feedback
      setShowWord(false);
      setShowFeedback(true);
      setIsCorrect(isCorrect);

      const newResponse: QuizResponse = {
        word: currentWord,
        isCorrect,
        isNonWord,
        responseTime,
        isTimeout,
      };

      const newResponses = [...responses, newResponse];
      setResponses(newResponses);

      // Handle feedback and transition to next word
      setTimeout(() => {
        setShowFeedback(false);
        if (currentWordIndex < TOTAL_WORDS - 1) {
          setCurrentWordIndex((prev) => prev + 1);
          setShowWord(true);
          startNewTrial();
        } else {
          // Calculate final score
          const timeoutCount = newResponses.filter((r) => r.isTimeout).length;
          const score =
            timeoutCount === TOTAL_WORDS
              ? 0
              : Math.round(
                  (newResponses.filter((r) => r.isCorrect).length /
                    TOTAL_WORDS) *
                    100
                );

          // Clean up before submitting
          cleanupTimeouts();
          submitQuizAttempt(newResponses, score);
        }
      }, FEEDBACK_DURATION);
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
    if (currentList) {
      const allWords = [...currentList.words, ...currentList.nonWords];
      const selectedWords = shuffleArray(allWords).slice(0, TOTAL_WORDS);
      setShuffledWords(selectedWords);
      setCurrentWordIndex(0);
      quizStartTime.current = performance.now();
      startNewTrial();
    }
  }, [currentList]);

  useEffect(() => {
    loadWordList();

    return () => {
      cleanupTimeouts();
      // Reset all state on unmount
      setCurrentWordIndex(0);
      setResponses([]);
      setShuffledWords([]);
    };
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

  if (error || wordListError) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">{error || wordListError}</p>
        <Button onClick={loadWordList}>Try Again</Button>
      </div>
    );
  }

  if (state === "instructions") {
    return <Instructions isMobile={isMobile} setState={setState} />;
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
    <QuizCard
      progress={progress}
      showWord={showWord}
      currentWord={currentWord}
      showFeedback={showFeedback}
      isCorrect={isCorrect ?? false}
      isMobile={isMobile}
      handleResponse={handleResponse}
      isActuallyCorrect={
        shuffledWords[currentWordIndex].includes(currentWord)
          ? isCorrect
          : !isCorrect
      }
    />
  );
}
