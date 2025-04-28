"use client";
import { QuizResponse, DeviceInfo } from "@/types";
import { useState, useRef, useCallback, useEffect } from "react";
import { useMediaQuery } from "./useMediaQuery";
import { useWordList } from "./useWordList";

const TOTAL_WORDS = 100;
const STIMULUS_DURATION = 2000; // 2 seconds max per word
const FEEDBACK_DURATION = 200; // 200ms for feedback display

interface QuizViewProps {
   onComplete: () => void;
}

export function useQuiz({ onComplete }: QuizViewProps) {
   const [state, setState] = useState<string>("instructions");
   const [isSubmitting, setIsSubmitting] = useState(false);
   const [error, setError] = useState<string | null>(null);
   const [responses, setResponses] = useState<QuizResponse[]>([]);
   const [currentWordIndex, setCurrentWordIndex] = useState(0);
   const [shuffledWords, setShuffledWords] = useState<string[]>([]);
   const [showWord, setShowWord] = useState(true);
   const [showFeedback, setShowFeedback] = useState(false);
   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
   const [quizStatus, setQuizStatus] = useState<"completed" | "dropped">(
      "dropped"
   );
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
   const stimulusRAF = useRef<number | null>(null);
   const feedbackRAF = useRef<number | null>(null);
   const handleResponseRef = useRef<
      ((isRealWord: boolean, isTimeout?: boolean) => void) | null
   >(null);

   // Add quiz start time reference
   const quizStartTime = useRef<number>(0);

   // Get device information
   const getDeviceInfo = useCallback((): DeviceInfo => {
      const ua = navigator.userAgent;
      const deviceType = isMobile ? "mobile" : "desktop";

      // Get OS
      let deviceOS = "unknown";
      if (ua.includes("Win")) deviceOS = "Windows";
      else if (ua.includes("Mac")) deviceOS = "MacOS";
      else if (ua.includes("Linux")) deviceOS = "Linux";
      else if (ua.includes("Android")) deviceOS = "Android";
      else if (ua.includes("iOS")) deviceOS = "iOS";

      // Get browser
      let deviceBrowser = "unknown";
      if (ua.includes("Chrome")) deviceBrowser = "Chrome";
      else if (ua.includes("Firefox")) deviceBrowser = "Firefox";
      else if (ua.includes("Safari")) deviceBrowser = "Safari";
      else if (ua.includes("Edge")) deviceBrowser = "Edge";

      // Get screen and viewport sizes
      const monitorSize = `${window.screen.width}x${window.screen.height}`;
      const viewportSize = `${window.innerWidth}x${window.innerHeight}`;

      return {
         deviceType,
         deviceOS,
         deviceBrowser,
         monitorSize,
         viewportSize,
      };
   }, [isMobile]);

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
      if (stimulusRAF.current) {
         cancelAnimationFrame(stimulusRAF.current);
         stimulusRAF.current = null;
      }
      if (feedbackRAF.current) {
         cancelAnimationFrame(feedbackRAF.current);
         feedbackRAF.current = null;
      }
      // Reset state when cleaning up
      setShowWord(false);
   }, []);

   const startNewTrial = useCallback(() => {
      setShowWord(true);
      stimulusStartTime.current = performance.now();

      // Set timeout for maximum stimulus duration using requestAnimationFrame
      const checkStimulusDuration = (timestamp: number) => {
         if (timestamp - stimulusStartTime.current >= STIMULUS_DURATION) {
            if (currentWordIndex < TOTAL_WORDS && handleResponseRef.current) {
               // Pass true as second argument to indicate timeout
               handleResponseRef.current(false, true);
            }
            return;
         }
         stimulusRAF.current = requestAnimationFrame(checkStimulusDuration);
      };
      stimulusRAF.current = requestAnimationFrame(checkStimulusDuration);
   }, [currentWordIndex]);

   const submitQuizAttempt = useCallback(
      async (newResponses: QuizResponse[], score: number) => {
         if (!currentList || quizStatus === `completed`) return;

         try {
            setIsSubmitting(true);
            const deviceInfo = getDeviceInfo();

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
                  ...deviceInfo,
                  quizStatus: `completed`,
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
      [currentList, quizStatus, getDeviceInfo, onComplete]
   );

   const handleResponse = useCallback(
      (
         isRealWord: boolean,
         isTimeout: boolean = false,
         responseType: "keyboard" | "buttons" = "buttons"
      ) => {
         if (
            !currentList ||
            !shuffledWords[currentWordIndex] ||
            state !== `quiz`
         )
            return;

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
            responseType,
            pageNumber: currentWordIndex + 1,
         };

         const newResponses = [...responses, newResponse];
         setResponses(newResponses);

         // Handle feedback and transition using requestAnimationFrame
         const feedbackStartTime = performance.now();
         const handleFeedback = (timestamp: number) => {
            if (timestamp - feedbackStartTime >= FEEDBACK_DURATION) {
               setShowFeedback(false);
               if (currentWordIndex < TOTAL_WORDS - 1) {
                  setCurrentWordIndex((prev) => prev + 1);
                  setShowWord(true);
                  startNewTrial();
               } else if (currentWordIndex === TOTAL_WORDS - 1) {
                  // Quiz completed
                  setQuizStatus("completed");

                  // Simple scoring: percentage of correct answers, counting timeouts as incorrect
                  const timeoutCount = newResponses.filter(
                     (r) => r.isTimeout
                  ).length;

                  let score: number;
                  if (timeoutCount === TOTAL_WORDS) {
                     score = 0;
                  } else {
                     // Only count non-timeout responses that are correct
                     const correctAnswers = newResponses.filter(
                        (r) => r.isCorrect && !r.isTimeout
                     ).length;
                     score = Math.round((correctAnswers / TOTAL_WORDS) * 100);
                  }

                  // Clean up before submitting
                  cleanupTimeouts();
                  submitQuizAttempt(newResponses, score);
               }
               return;
            }
            feedbackRAF.current = requestAnimationFrame(handleFeedback);
         };
         feedbackRAF.current = requestAnimationFrame(handleFeedback);
      },
      [
         currentList,
         shuffledWords,
         currentWordIndex,
         state,
         cleanupTimeouts,
         responses,
         startNewTrial,
         submitQuizAttempt,
      ]
   );

   // Store the latest handleResponse in a ref to avoid circular dependency
   useEffect(() => {
      handleResponseRef.current = handleResponse;
   }, [handleResponse]);

   useEffect(() => {
      if (currentList && state === "quiz") {
         const allWords = [...currentList.words, ...currentList.nonWords];
         const selectedWords = shuffleArray(allWords).slice(0, TOTAL_WORDS);
         setShuffledWords(selectedWords);
         setCurrentWordIndex(0);
         quizStartTime.current = performance.now();
         console.log("Quiz started at:", quizStartTime.current);
         startNewTrial();
      }
   }, [currentList, state]);

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
         if (showFeedback) return;

         switch (event.key) {
            case "1":
            case "ArrowLeft":
               handleResponse(false, false, "keyboard");
               break;
            case "2":
            case "ArrowRight":
               handleResponse(true, false, "keyboard");
               break;
         }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
   }, [isMobile, handleResponse, showFeedback]);

   return {
      state,
      error,
      handleResponse,
      handleResponseRef,
      currentList,
      responses,
      currentWordIndex,
      showFeedback,
      quizStatus,
      isMobile,
      wordListError,
      loadWordList,
      setState,
      shuffledWords,
      isLoading,
      isSubmitting,
      showWord,
      isCorrect,
   };
}
