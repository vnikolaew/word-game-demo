import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useWordList } from "@/hooks/useWordList";
import { DeviceInfo, QuizResponse } from "@/types";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

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

const shuffleArray = (array: string[]) => {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
};

export const MAX_MOBILE_WIDTH = 768;

const WORD = `word`;
const NON_WORD = `non-word`;

const ARROW_LEFT = `ArrowLeft`;
const ARROW_RIGHT = `ArrowRight`;

export function useExperiment(state: string, scriptsLoaded: boolean) {
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
   const {
      currentList,
      getNewWordList,
      isLoading,
      error: wordListError,
   } = useWordList();
   const [shuffledWords, setShuffledWords] = useState<string[]>(null!);
   const [currentIndex, setCurrentIndex] = useState(0);
   const [correct, setCorrect] = useState(false);
   const [error, setError] = useState<string>(null!);
   const [show, setShow] = useState(false);

   useEffect(() => {
      getNewWordList();
   }, []);

   useEffect(() => {
      if (currentList) {
         const selectedWords = shuffleArray([
            ...currentList.words,
            ...currentList.nonWords,
         ]).slice(0, TOTAL_WORDS);
         setShuffledWords(selectedWords);
      }
   }, [currentList]);

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

   const handleChoice = useCallback(
      (choice: typeof ARROW_LEFT | typeof ARROW_RIGHT) => {
         const word =
            document
               .querySelector(`#jspsych-html-button-response-stimulus > h1`)
               ?.textContent?.toString() ?? ``;

         const correct =
            choice === ARROW_RIGHT
               ? currentList?.words.includes(word)
               : currentList?.nonWords.includes(word);

         const content = document.querySelector(
            `.jspsych-content-wrapper #feedback`
         ) as HTMLDivElement;

         const wrapper = document.querySelector(
            `#jspsych-content`
         ) as HTMLDivElement;

         if (content && wrapper?.children?.length > 0) {
            const feedbackSvg = content.querySelector(`svg`);
            if (feedbackSvg) content.removeChild(feedbackSvg);

            let svg = ``;
            if (correct)
               svg = `<svg title="صحيح" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check !text-green-700"><path d="M20 6 9 17l-5-5"/></svg>`;
            else
               svg = `<svg title="غير صحيح" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x !text-red-700"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

            content.style.visibility = `visible`;
            content.insertAdjacentHTML(`beforeend`, svg);
         }

         const btnOne = document.getElementById(
            `choice-${ARROW_LEFT}`
         ) as HTMLButtonElement;

         const btnTwo = document.getElementById(
            `choice-${ARROW_RIGHT}`
         ) as HTMLButtonElement;

         setTimeout(() => {
            if (choice === ARROW_RIGHT) {
               btnOne?.click();
            } else if (choice === ARROW_LEFT) {
               btnTwo?.click();
            }
         }, FEEDBACK_DURATION);
      },
      [currentIndex, currentList?.nonWords, currentList?.words, responses]
   );

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
      if (!currentList || responses?.length < 100) return false;

      try {
         setIsSubmitting(true);
         const deviceInfo = getDeviceInfo();

         // Calculate detailed statistics
         const correctWords = shuffledWords.filter(
            (w, index) =>
               currentList.words.includes(w) && responses.at(index)!.correct
         ).length;

         const incorrectWords = shuffledWords.filter(
            (w, index) =>
               currentList.words.includes(w) && !responses.at(index)!.correct
         ).length;

         const correctNonWords = shuffledWords.filter(
            (w, index) =>
               currentList.nonWords.includes(w) && responses.at(index)!.correct
         ).length;

         const incorrectNonWords = shuffledWords.filter(
            (w, index) =>
               currentList.nonWords.includes(w) && !responses.at(index)!.correct
         ).length;

         const npxionTime = Math.round(
            responses.reduce((sum, r) => sum + r.rt, 0)
         );

         // Calculate total quiz duration
         const totalQuizDuration = responses.at(-1)?.time_elapsed;

         const body = {
            wordListId: currentList.id,
            responses: responses.map<QuizResponse>((r, index) => {
               const word = shuffledWords.at(index)!;
               const correct =
                  (r.correct_response === WORD &&
                     r.response?.toString() === `0`) ||
                  (r.correct_response === NON_WORD &&
                     r.response?.toString() === `1`);

               return {
                  isCorrect: correct,
                  isNonWord: r.correct_response === NON_WORD,
                  isTimeout: r.response === null,
                  pageNumber: index + 1,
                  responseTime: r.rt,
                  response: r.response,
                  responseType: r.is_mobile ? `buttons` : `keyboard`,
                  word,
               };
            }),
            score: responses.filter((r) => {
               const correct =
                  (r.correct_response === WORD &&
                     r.response?.toString() === `0`) ||
                  (r.correct_response === NON_WORD &&
                     r.response?.toString() === `1`);
               return correct;
            }).length,
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
   }, [currentList, responses, getDeviceInfo, shuffledWords]);

   return {
      show,
      responses: responses.filter((r) => r.task === `response`),
      currentList,
      shuffledWords,
      correct,
      error,
      submitQuizAttempt,
      getDeviceInfo,
      isSubmitting,
      isMobile,
      getNewWordList,
      loaded,
      setLoaded,
      isLoading,
      wordListError,
      handleChoice,
   };
}
