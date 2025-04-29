import { useMediaQuery } from "@/hooks/useMediaQuery";
import { useWordList } from "@/hooks/useWordList";
import { DeviceInfo, QuizResponse } from "@/types";
import { useCallback, useEffect, useRef, useState } from "react";

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
export const ANSWER_TIMEOUT = 2_000;
export const FIXATION_TIMEOUT = 500;

const loadScript = (src: string) => {
   return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = resolve;
      script.onerror = reject;
      document.head.appendChild(script);
   });
};

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

export function useExperiment(state: string) {
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
   const [shuffledWords, setShuffledWords] = useState<string[]>([]);

   const [correct, setCorrect] = useState(false);
   const [error, setError] = useState<string>(null!);
   const [show, setShow] = useState(false);

   useEffect(() => {
      getNewWordList();
   }, []);

   useEffect(() => {
      const content = document.getElementById(
         `jspsych-content`
      ) as HTMLDivElement;

      if (!content || correct === null) return;

      setTimeout(() => {
         if (correct)
            content.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check !text-green-700"><path d="M20 6 9 17l-5-5"/></svg>`;
         else
            content.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x !text-red-700"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;
      }, 0);
   }, [correct]);

   useEffect(() => {
      if (currentList) {
         const allWords = [...currentList.words, ...currentList.nonWords];
         const selectedWords = shuffleArray(allWords).slice(0, TOTAL_WORDS);
         setShuffledWords(selectedWords);
      }
   }, [currentList]);

   useEffect(() => {
      const listener = (e: KeyboardEvent) => {
         const btnOne = document.getElementById(
            `choice-${ARROW_LEFT}`
         ) as HTMLButtonElement;
         const btnTwo = document.getElementById(
            `choice-${ARROW_RIGHT}`
         ) as HTMLButtonElement;

         if (e.key === ARROW_LEFT) {
            btnOne?.click();
         } else if (e.key === ARROW_RIGHT) {
            btnTwo?.click();
         }
      };

      const initExperiment = () => {
         if (run.current || state !== `quiz`) return;
         run.current = true;

         /* initialize jsPsych */
         const jsPsych = initJsPsych({
            display_element: `jspsych-experiment`,
            on_data_update: function (data) {
               const is_mobile = window.innerWidth <= MAX_MOBILE_WIDTH;
               setResponses((r) => [
                  ...r,
                  { ...data, is_mobile } as JsPsychTrialData,
               ]);
            },
            on_finish: function () {
               // jsPsych.data.displayData();
               const all = jsPsych.data.results?.trials;
               const res = all?.filter((t) => t.task === `response`);

               setShow(true);
               const wrapper = document.querySelector(
                  `jspsych-content-wrapper`
               ) as HTMLDivElement;

               if (wrapper) {
                  wrapper.style.height = `0px`;
                  wrapper.style.minHeight = `0px`;
               }
            },
         });

         /* create timeline */
         const timeline = [];

         /* define welcome message trial */
         const welcome = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: "أهلاً بك في الاختبار. اضغط أي مفتاح للمتابعة.",
         };
         timeline.push(welcome);

         /* define trial stimuli array for timeline variables */
         const test_stimuli = shuffledWords.map((word) => ({
            stimulus: `<h1 className="text-3xl font-bold">${word}</h1>`,
            correct_response: currentList?.words.includes(word)
               ? WORD
               : NON_WORD,
         }));

         /* define fixation and test trials */
         const fixation = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: "<span id='correct'></span>",
            choices: "NO_KEYS",
            trial_duration: function () {
               return FIXATION_TIMEOUT;
            },
            data: {
               task: "fixation",
            },
         };

         const test = {
            type: jsPsychHtmlButtonResponse,
            stimulus: jsPsych.timelineVariable("stimulus"),
            choices: [ARROW_LEFT, ARROW_RIGHT], // Accept left and right arrow keys
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

               const correct_ =
                  data.response === null
                     ? false
                     : jsPsych.pluginAPI.compareKeys(
                          response,
                          data.correct_response
                       );

               data.correct = correct_;
               setCorrect(correct_);
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

         /* define debrief */
         const debrief_block = {
            type: jsPsychHtmlKeyboardResponse,
            stimulus: function () {
               return ``;
            },
         };
         timeline.push(debrief_block);

         /* start the experiment */
         jsPsych.run(timeline);
      };

      // Load jsPsych scripts dynamically
      if (!shuffledWords?.length || !currentList) return;

      // Load all required scripts
      const scripts = [
         "https://unpkg.com/jspsych@8.2.1",
         `https://unpkg.com/@jspsych/plugin-html-keyboard-response@2.1.0`,
         `https://unpkg.com/@jspsych/plugin-image-keyboard-response@2.1.0`,
         `https://unpkg.com/@jspsych/plugin-preload@2.1.0`,
         `https://unpkg.com/@jspsych/plugin-html-button-response@2.1.0`,
      ];

      Promise.all(scripts.map(loadScript))
         .then(async () => {
            initExperiment();
            window.addEventListener(`keydown`, listener);
            setLoaded(true);
         })
         .catch((e) => setError(e));

      return () => window.removeEventListener(`keydown`, listener);
   }, [getNewWordList, shuffledWords, currentList, state]);

   const [isSubmitting, setIsSubmitting] = useState(false);
   const submitQuizAttempt = useCallback(async () => {
      if (!currentList || responses.length < 100) return false;

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
            responses: responses
               .filter((r) => r.task === `response`)
               .map<QuizResponse>((r, index) => {
                  const word = shuffledWords.at(index)!;
                  return {
                     isCorrect: r.correct,
                     isNonWord: !currentList.words.includes(word),
                     isTimeout: !r.response,
                     pageNumber: index + 1,
                     responseTime: r.rt,
                     responseType: r.is_mobile ? `buttons` : `keyboard`,
                     word,
                  };
               }),
            score: responses.filter((r) => r.correct).length,
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
      isLoading,
      wordListError,
   };
}
