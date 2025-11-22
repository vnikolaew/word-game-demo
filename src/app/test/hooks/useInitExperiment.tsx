'use client'

import { useCallback, useEffect, useMemo } from "react";
import {
   ANSWER_TIMEOUT, FEEDBACK_DURATION,
   FIXATION_TIMEOUT,
   FIXATION_TIMEOUT_MOBILE,
   JsPsychTrialData,
   MAX_MOBILE_WIDTH
} from "@/app/test/hooks/index";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { getWordFromStimulus } from "@/utils/quizUtils";

interface WordList {
   id: string;
   words: string[];
   nonWords: string[];
   timesUsed: number;
}

const WORD = `word`;
const NON_WORD = `non-word`;

const ARROW_LEFT = `ArrowLeft`; // WORD
const ARROW_RIGHT = `ArrowRight`; // NON_WORD

function updateResponseDisplayFeedback(correct: boolean) {
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
      svg = correct
          ? `<svg title="صحيح" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-check-icon lucide-check !text-green-500"><path d="M20 6 9 17l-5-5"/></svg>`
          : `<svg title="غير صحيح" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-x-icon lucide-x !text-red-500"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>`;

      content.style.visibility = `visible`;
      content.insertAdjacentHTML(`beforeend`, svg);
      return true
   }

   return false
}

export function useInitExperiment(
    currentList: WordList,
    shuffledWords: string[],
    setResponses: (r: JsPsychTrialData[] | ((r: JsPsychTrialData[]) => JsPsychTrialData[])) => void,
    setCurrentIndex: (i: number | ((i: number) => number)) => void,
    setShow: (s: boolean) => void,
    run: React.RefObject<boolean>,
    setCorrect: (c: boolean) => void,
    state: string,
    scriptsLoaded: boolean,
    setLoaded: (l: boolean) => void,
    setError: (e: string) => void,
) {
   const isMobile = useMediaQuery(`(max-width: ${MAX_MOBILE_WIDTH}px)`);

   const word_types = useMemo(() => {
      return shuffledWords
          ?.map(w => currentList?.words.includes(w)
              ? WORD
              : (currentList?.nonWords.includes(w) ? NON_WORD : ``))
   }, [shuffledWords, currentList])

   const initExperiment = useCallback(() => {
      if (run.current || state !== `quiz` || !word_types?.length || !shuffledWords.length) return;
      run.current = true;

      /* initialize jsPsych */
      // @ts-ignore
      const jsPsych = initJsPsych({
         display_element: `jspsych-experiment`,
         minimum_valid_rt: 100,
         on_data_update: function (data: JsPsychTrialData) {
            const is_mobile = window.innerWidth <= MAX_MOBILE_WIDTH;
            if (data.task !== `response`) return;

            const word = getWordFromStimulus(data?.stimulus)
            const word_index = shuffledWords.indexOf(word!)

            const correct = data?.response?.toString() === `0`
                ? word_types[word_index] === NON_WORD
                : data?.response?.toString() === `1` ?
                    word_types[word_index] === WORD : false;

            setResponses((r) => [
               ...r,
               { ...data, is_mobile, correct }
            ]);
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
      const test_stimuli = shuffledWords.map((word, index) => {
         return {
            stimulus: `<h1 className="text-3xl font-bold">${word}</h1>`,
            word,
            correct_response: word_types[index]
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
            const word = getWordFromStimulus(data?.stimulus)
            const word_index = shuffledWords.indexOf(word!)

            const response = data.response?.toString() === `0`
                ? NON_WORD : data.response?.toString() === `1`
                    ? WORD : ``;

            const c = (response === WORD && word_types[word_index] === WORD)
                || (response === NON_WORD && word_types[word_index] === NON_WORD)

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

   }, [isMobile, run, setCorrect, setCurrentIndex, setResponses, setShow, shuffledWords, state, word_types])

   useEffect(() => {
      if (!shuffledWords?.length || !currentList || !word_types?.length || !scriptsLoaded) return;

      try {
         setTimeout(() => {
            initExperiment();
            setLoaded(true);
         }, 500);
      } catch (error) {
         setError(error instanceof Error ? error.message : (error as string));
      }
   }, [initExperiment, setError, shuffledWords, currentList, scriptsLoaded, setLoaded, word_types]);

   const handleChoice = useCallback(
       (choice: typeof ARROW_LEFT | typeof ARROW_RIGHT) => {
          const word =
              document
                  .querySelector(`#jspsych-html-button-response-stimulus > h1`)
                  ?.textContent?.toString()?.trim() ?? ``;
          if (![...currentList.words, ...currentList.nonWords].includes(word)) {
             // Early return since list word / non-word is not displayed
             return
          }

          const correct = choice === ARROW_RIGHT
              ? currentList?.words.includes(word)
              : choice === ARROW_LEFT ? currentList?.nonWords.includes(word) : false;

          updateResponseDisplayFeedback(correct)

          const btnOne = document.getElementById(
              `choice-${ARROW_LEFT}`
          ) as HTMLButtonElement;

          const btnTwo = document.getElementById(
              `choice-${ARROW_RIGHT}`
          ) as HTMLButtonElement;

          setTimeout(() => {
             if (choice === ARROW_LEFT) {
                btnOne?.click();
             } else if (choice === ARROW_RIGHT) {
                btnTwo?.click();
             }
          }, FEEDBACK_DURATION);
       },
       [currentList.nonWords, currentList.words]
   );

   return { handleChoice, word_types }
}