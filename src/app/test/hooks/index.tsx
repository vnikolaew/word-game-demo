'use client'
import { DeviceInfo, QuizResponse } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { WordList } from "@/hooks/useWordList";
import { useInitExperiment } from "@/app/test/hooks/useInitExperiment";
import { getWordFromStimulus } from "@/utils/quizUtils";

export interface JsPsychTrialData {
   correct: boolean;
   correct_response: string;
   plugin_version: string;
   response: string;
   rt: number;
   timestamp?: number
   stimulus: string;
   task: string;
   time_elapsed: number;
   trial_index: number;
   trial_type: string;
   is_mobile?: boolean;
}

export const TOTAL_WORDS = 100;
export const FEEDBACK_DURATION = 200;
export const ANSWER_TIMEOUT = 2_000 + FEEDBACK_DURATION;

export const FIXATION_TIMEOUT = 500;
export const FIXATION_TIMEOUT_MOBILE = 2_000;

export const MAX_MOBILE_WIDTH = 768;

const WORD = `word`;
const NON_WORD = `non-word`;

const ARROW_LEFT = `ArrowLeft`;
const ARROW_RIGHT = `ArrowRight`;

export function useExperiment(list: WordList, shuffledWords: string[], state: string, scriptsLoaded: boolean) {
   const run = useRef(false);
   const isMobile = useMediaQuery(`(max-width: ${MAX_MOBILE_WIDTH}px)`);
   const [loaded, setLoaded] = useState(false);

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

   const [responses, setResponses] = useState<JsPsychTrialData[]>([]);

   const [currentIndex, setCurrentIndex] = useState(0);
   const [correct, setCorrect] = useState(false);
   const [error, setError] = useState<string>(null!);
   const [show, setShow] = useState(false);
   const { word_types, handleChoice } = useInitExperiment(
       list!,
       shuffledWords, setResponses, setCurrentIndex, setShow, run, setCorrect, state, scriptsLoaded, setLoaded, setError
   )

   useEffect(() => {
      if (!loaded || !scriptsLoaded) return;

      const content = document.querySelector(
          `.jspsych-content-wrapper`
      ) as HTMLDivElement;

      if (!content || content.querySelector(`#feedback`)) return;

      const feedbackContainer = document.createElement(`div`) as HTMLDivElement;
      feedbackContainer.id = `feedback`;
      feedbackContainer.style.minHeight = `2rem`;
      feedbackContainer.style.visibility = `hidden`;

      content.appendChild(feedbackContainer);
   }, [loaded, scriptsLoaded]);

   useEffect(() => {
      const listener = (e: KeyboardEvent) => {
         if (![ARROW_LEFT, ARROW_RIGHT].includes(e.key)) return;
         handleChoice(e.key as any);
      };

      window.addEventListener(`keydown`, listener);
      return () => window.removeEventListener(`keydown`, listener);
   }, [handleChoice]);

   const [isSubmitting, setIsSubmitting] = useState(false);

   const submitQuizAttempt = useCallback(async () => {
      if (!list || responses?.length < TOTAL_WORDS) return false;

      const isCorrect = (r: JsPsychTrialData) => r.correct;

      try {
         setIsSubmitting(true);
         const deviceInfo = getDeviceInfo();

         // Calculate detailed statistics
         const correctWords = responses.filter(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.words.includes(word) && isCorrect(res)
         }).length

         const incorrectWords = responses.filter(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.words.includes(word) && !isCorrect(res)
         }).length

         const correctNonWords = responses.filter(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.nonWords.includes(word) && isCorrect(res)
         }).length

         const incorrectNonWords = responses.filter(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.nonWords.includes(word) && !isCorrect(res)
         }).length

         const npxionTime = Math.round(
             responses.reduce((sum, r) => sum + r.rt, 0)
         )

         // Calculate total quiz duration
         const totalQuizDuration = responses.at(-1)?.time_elapsed;
         const score = responses.filter(isCorrect).length;
         const quizStatus = `completed`

         const body = {
            wordListId: list.id,
            responses: responses.map<QuizResponse>((r, index) => {
               const word = getWordFromStimulus(r.stimulus)!
               const type = list.words.includes(word)
                   ? WORD : list.nonWords.includes(word)
                       ? NON_WORD : ``

               const responseType = r.is_mobile ? `buttons` : `keyboard`

               return {
                  isCorrect: isCorrect(r),
                  isNonWord: type === NON_WORD,
                  isTimeout: r.response === null,
                  pageNumber: index + 1,
                  responseTime: r.rt,
                  timestamp: r.timestamp,
                  response: r.response,
                  responseType,
                  word,
               };
            }),
            score,
            correctWords,
            incorrectWords,
            correctNonWords,
            incorrectNonWords,
            npxionTime,
            totalQuizDuration,
            ...deviceInfo,
            quizStatus
         };

         const submitResponse = await fetch("/api/quiz/attempts", {
            method: "POST",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
         });

         if (!submitResponse.ok) {
            throw new Error("Failed to submit quiz attempt");
         }

         return true;
      } catch (err) {
         setError(
             err instanceof Error ? err.message : "Failed to submit results"
         );
         return false;
      } finally {
         setIsSubmitting(false);
      }
   }, [list, responses, getDeviceInfo]);

   return {
      show,
      responses: responses.filter((r) => r.task === `response`),
      correct,
      error,
      submitQuizAttempt,
      getDeviceInfo,
      isSubmitting,
      isMobile,
      loaded,
      setLoaded,
      handleChoice,
      currentIndex, word_types
   };
}
