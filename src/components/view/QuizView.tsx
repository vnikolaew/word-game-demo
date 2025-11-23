"use client";

import {Button} from "@/components/ui/button";
import {Spinner} from "../ui/Spinner";
import Instructions from "./Instructions";

import {cn, hideHeaderAndFooter} from "@/lib/utils";
import {useRouter} from "next/navigation";
import {useState, useEffect, Fragment, useMemo, useRef} from "react";
import {Card} from "../ui/card";
import {Tajawal} from "next/font/google";
import {Progress} from "../ui/progress";
import {RefreshCw} from "lucide-react";
import Script from "next/script";
import InstuctionsPicture from "./Instructions/InstuctionsPicture";
import {useExperiment} from "@/app/test/hooks";
import {WordList} from "@/hooks/useWordList";
import {__IS_DEV__} from "@/lib/consts";

interface QuizViewProps {
   onComplete: () => void;
   list: WordList
   shuffledWords: string[]
}

const TOTAL_WORDS = 100;

const WORD = `word`;
const NON_WORD = `non-word`;

const tajawal = Tajawal({
   variable: "--font-arabic",
   weight: "300",
   subsets: ["arabic"],
   display: "swap",
});

const scriptSources = [
   {
      url: "https://unpkg.com/jspsych@8.2.1",
   },
   {
      url: "https://unpkg.com/@jspsych/plugin-html-keyboard-response@2.1.0",
   },
   {
      url: "https://unpkg.com/@jspsych/plugin-html-button-response@2.1.0",
   },
] as const;

const DARK_BG_CLASSNAME = "!bg-gray-700";

export default function QuizView({onComplete, list, shuffledWords}: QuizViewProps) {
   const [state, setState] = useState<string>("instructions");
   const quizSubmitted = useRef<boolean>(false)

   const [scriptsLoaded, setScriptsLoaded] = useState<boolean[]>(
       Array.from({length: scriptSources.length}).map((_) => false)
   );
   const allScriptsLoaded = useMemo(
       () => scriptsLoaded.every((x) => x),
       [scriptsLoaded]
   );

   useEffect(() => {
      document.body.classList.add(`!transition-all`, `duration-200`);

      if (state === `quiz`) {
         document.body.classList.remove(`!bg-transparent`);
         document.body.classList.add(DARK_BG_CLASSNAME);
      }
   }, [state]);

   const {
      responses,
      submitQuizAttempt,
      error,
      isSubmitting,
      isMobile,
      handleChoice,
   } = useExperiment(list, shuffledWords, state, allScriptsLoaded);
   const router = useRouter();

   const updateLoaded = (index: number) => {
      setScriptsLoaded((l) => {
         const newLoaded = [...l];
         newLoaded[index] = true;
         return newLoaded;
      });
   };

   useEffect(() => {
      if (state !== `quiz`) return;
      hideHeaderAndFooter();
   }, [state]);

   useEffect(() => {
      if (responses?.length >= TOTAL_WORDS && !quizSubmitted.current) {
         quizSubmitted.current = true;
         submitQuizAttempt().then((success) => {
            if (success) onComplete();
         });
      }
   }, [onComplete, responses, submitQuizAttempt]);

   if (error) {
      return (
          <div className="flex flex-col items-center justify-center min-h-[50vh]">
             <p className="text-red-500 mb-4 text-lg">
                {(error instanceof Error ? error.message : error)}
             </p>
             <Button
                 className="mt-12 !px-12 inline-flex items-center gap-2"
                 // onClick={getNewWordList}
             >
                <RefreshCw size={18}/>
                حاول ثانية
             </Button>
          </div>
      );
   }

   if (state === "instructions") {
      return (
          <Instructions
              isMobile={isMobile}
              setState={() => setState("instructions-picture")}
          />
      );
   }

   if (state === "instructions-picture") {
      return (
          <InstuctionsPicture
              practice={false}
              onClick={() => setState(`quiz`)}
          />
      );
   }

   if (!list || !shuffledWords?.length) {
      return (
          <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
             <Spinner className="animate-spin" size="sm"/>
             <p className="text-sm text-white">
                {isSubmitting
                    ? "حفظ نتائج الاختبار ..."
                    : "يرجى الانتظار بينما نقوم بتحميل الاختبار ..."}
             </p>
          </div>
      );
   }

   return (
       <Fragment>
          {scriptSources
              .filter(
                  (_, i) =>
                      // Loaded script
                      scriptsLoaded[i] ||
                      // First script
                      i === 0 ||
                      // Next script that has not loaded yet
                      (i >= 1 && scriptsLoaded[i - 1])
              )
              .map(({url}, index) => (
                  <Script
                      strategy="afterInteractive"
                      async
                      key={url + index}
                      src={url}
                      onReady={() => updateLoaded(index)}
                  />
              ))}
          <Card
              className={cn(
                  "w-full p-2 !min-h-[50vh] relative !border-none !outline-none !shadow-none !text-white",
                  DARK_BG_CLASSNAME,
                  tajawal.className
              )}
          >
             <div className="absolute top-0 left-0 gap-2 w-full text-center mx-auto">
                <Progress
                    value={responses?.length}
                    className="mb-6 !bg-white w-3/4 mx-auto"
                />
             </div>
             <pre>{error}</pre>
             {!allScriptsLoaded ? (
                 <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
                    <Spinner className="animate-spin" size="sm"/>
                    <p className="text-sm text-white">
                       {isSubmitting
                           ? "حفظ نتائج الاختبار ..."
                           : "يرجى الانتظار بينما نقوم بتحميل الاختبار ..."}
                    </p>
                 </div>
             ) : (
                 <div>
                    <div
                        id="jspsych-experiment"
                        className="!w-full !min-h-[50vh] !h-full !border-none outline-none flex flex-col items-center justify-center"
                    >
                       {isMobile ? (
                           <div className="flex justify-center items-center gap-4 absolute w-3/4 bottom-4">
                              <Button
                                  variant="default"
                                  title="هذه الكلمة هي كلمة حقيقية"
                                  onClick={(_) => {
                                     handleChoice(`ArrowRight`);
                                  }}
                                  className="w-full md:w-32 h-12 text-lg bg-green-500 text-white font-semibold"
                              >
                                 نعم
                              </Button>
                              <Button
                                  title="هذه الكلمة ليست كلمة حقيقية"
                                  variant="destructive"
                                  onClick={(_) => {
                                     handleChoice(`ArrowLeft`);
                                  }}
                                  className="w-full md:w-32 h-12 text-lg text-white bg-red-500 font-semibold"
                              >
                                 لا
                              </Button>
                           </div>
                       ) : (
                           <span/>
                       )}
                    </div>
                 </div>
             )}
          </Card>
       </Fragment>
   );
}
