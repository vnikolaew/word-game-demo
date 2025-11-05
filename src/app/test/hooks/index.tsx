import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useWordList, WordList } from "@/hooks/useWordList";
import { DeviceInfo, QuizResponse } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";
import { useInitExperiment } from "./useInitExperiment";
import { getWordFromStimulus } from "@/utils/quizUtils";

export interface JsPsychTrialData {
   correct: boolean;
   correct_response: string;
   plugin_version: string;
   response: string;
   rt: number;
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

   const {word_types, handleChoice} = useInitExperiment(
       list!,
       shuffledWords, setResponses, setCurrentIndex, setShow, run, setCorrect, state, scriptsLoaded, setLoaded, setError, currentIndex
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
   }, [handleChoice, responses, shuffledWords]);

   useEffect(() => {
      const initExperiment = () => {
         if (run.current || state !== `quiz`) return;
         run.current = true;

         /* initialize jsPsych */
         const jsPsych = initJsPsych({
            display_element: `jspsych-experiment`,
            on_data_update: function (data) {
               const is_mobile = window.innerWidth <= MAX_MOBILE_WIDTH;

               if (data.task === `response`) {
                  setResponses((r) => [
                     ...r,
                     { ...data, is_mobile } as JsPsychTrialData,
                  ]);
               }
            },
            on_finish: function () {
               setShow(true);
            },
         });

         /* create timeline */
         const timeline = [];

         /* define welcome message trial */
         const welcome = isMobile
            ? {
                 type: jsPsychHtmlKeyboardResponse,
                 stimulus: `أهلاً بكم في الاختبار. سيبدأ الاختبار قريباً.`,
                 choices: "NO_KEYS",
                 trial_duration: function () {
                    return FIXATION_TIMEOUT_MOBILE;
                 },
                 data: {
                    task: "fixation",
                 },
              }
            : {
                 type: jsPsychHtmlKeyboardResponse,
                 stimulus: "أهلاً بك في الاختبار. اضغط أي مفتاح للمتابعة.",
              };
         timeline.push(welcome);

         /* define trial stimuli array for timeline variables */
         const test_stimuli = shuffledWords.map((word) => {
            const is_word = currentList?.words.includes(word);
            return {
               stimulus: `<h1 className="text-3xl font-bold">${word}</h1>`,
               word,
               correct_response: is_word ? WORD : NON_WORD,
            };
         });

         /* define fixation and test trials */
         const test = {
            type: jsPsychHtmlButtonResponse,
            stimulus: jsPsych.timelineVariable("stimulus"),
            choices: [ARROW_LEFT, ARROW_RIGHT],
            prompt: "",
            button_html: (choice: any) =>
               `<button id="choice-${choice}" style="width: 0px; height: 0px; margin: 20px; cursor: pointer; display:none;">${choice}</button>`,
            trial_duration: function () {
               return ANSWER_TIMEOUT;
            },
            data: {
               task: "response",
               correct_response: jsPsych.timelineVariable("correct_response"),
            },
            on_start: function () {
               setCorrect(null!);
            },
            on_finish: function (data: any) {
               const response = data.response === 0 ? WORD : NON_WORD;

               const c =
                  data.response !== null
                     ? data.correct_response === response
                     : false;

               data.correct = c;
               setCorrect(c);
               setCurrentIndex((i) => i + 1);
            },
         };

         const fixation = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: "",
            choices: "NO_KEYS",
            on_start: function () {
               const content = document.querySelector(
                  `.jspsych-content-wrapper #feedback`
               ) as HTMLDivElement;

               if (content) content.style.visibility = `hidden`;
            },
            on_finish: function () {
               const content = document.querySelector(
                  `.jspsych-content-wrapper #feedback`
               ) as HTMLDivElement;

               if (content) content.style.visibility = `hidden`;
            },
            trial_duration: function () {
               return FIXATION_TIMEOUT;
            },
            data: {
               task: "fixation",
            },
         };

         /* define test procedure */
         const test_procedure = {
            timeline: [fixation, test],
            timeline_variables: test_stimuli,
            repetitions: 1,
            randomize_order: true,
         };
         timeline.push(test_procedure);

         /* start the experiment */
         jsPsych.run(timeline);
      };

      // Load jsPsych scripts dynamically
      if (!shuffledWords?.length || !currentList || !scriptsLoaded) return;

      try {
         setTimeout(() => {
            initExperiment();
            setLoaded(true);
         }, 500);
      } catch (error) {
         setError(error instanceof Error ? error.message : (error as string));
      }
   }, [
      getNewWordList,
      shuffledWords,
      currentList,
      state,
      scriptsLoaded,
      isMobile,
   ]);

   const [isSubmitting, setIsSubmitting] = useState(false);
   const submitQuizAttempt = useCallback(async () => {
      if (!list || responses?.length < TOTAL_WORDS) return false;

      const isCorrect = (r: JsPsychTrialData) => r.correct;

      try {
         setIsSubmitting(true);
         const deviceInfo = getDeviceInfo();
         const correctWords  = responses.map(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.words.includes(word) && isCorrect(res)
         })

         const incorrectWords  = responses.map(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.words.includes(word) && !isCorrect(res)
         })

         const correctNonWords   = responses.map(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.nonWords.includes(word) && isCorrect(res)
         })

         const incorrectNonWords    = responses.map(res => {
            const word = getWordFromStimulus(res.stimulus)!
            return list.nonWords.includes(word) && !isCorrect(res)
         })

         const npxionTime = Math.round(
            responses.reduce((sum, r) => sum + r.rt, 0)
         );

         // Calculate total quiz duration
         const totalQuizDuration = responses.at(-1)?.time_elapsed;

         const body = {
            wordListId: list.id,
            responses: responses.map<QuizResponse>((r, index) => {
               const word = getWordFromStimulus(r.stimulus)!
               const word_index = shuffledWords.indexOf(word)
               const type = word_types.at(word_index)!

               return {
                  isCorrect: isCorrect(r),
                  isNonWord: type === NON_WORD,
                  isTimeout: r.response === null,
                  pageNumber: index + 1,
                  responseTime: r.rt,
                  response: r.response,
                  responseType: r.is_mobile ? `buttons` : `keyboard`,
                  word,
               };
            }),
            score: responses.filter((r) => isCorrect(r)).length,
            correctWords,
            incorrectWords,
            correctNonWords,
            incorrectNonWords,
            npxionTime,
            totalQuizDuration,
            ...deviceInfo,
            quizStatus: `completed`,
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
   }, [list, responses, getDeviceInfo, shuffledWords]);

   return {
      show,
      responses: responses.filter((r) => r.task === `response`),
      currentList: list,
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
