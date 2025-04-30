"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "../ui/Spinner";
import Instructions from "./Instructions";

import { useExperiment } from "@/app/test/hooks";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import { useState, useEffect, Fragment } from "react";
import { Card } from "../ui/card";
import { Noto_Sans_Arabic } from "next/font/google";
import { Progress } from "../ui/progress";
import { RefreshCcw, RefreshCw } from "lucide-react";

interface QuizViewProps {
   onComplete: () => void;
}

const TOTAL_WORDS = 100;

const notoSans = Noto_Sans_Arabic({
   variable: "--font-arabic",
   weight: "400",
   subsets: ["arabic"],
   display: "swap",
});

export default function QuizView({ onComplete }: QuizViewProps) {
   const [state, setState] = useState<string>("instructions");
   const {
      responses,
      submitQuizAttempt,
      error,
      isSubmitting,
      isMobile,
      loaded,
      shuffledWords,
      currentList,
      isLoading,
      wordListError,
      getNewWordList,
   } = useExperiment(state);
   const router = useRouter();

   useEffect(() => {
      if (responses.length >= TOTAL_WORDS) {
         submitQuizAttempt().then((success) => {
            if (success) {
               onComplete();
            }
         });
      }
   }, [onComplete, responses.length, router, submitQuizAttempt]);

   if (error || wordListError) {
      return (
         <div className="flex flex-col items-center justify-center min-h-[50vh]">
            <p className="text-red-500 mb-4 text-lg">
               {(error instanceof Error ? error.message : error) ||
                  wordListError}
            </p>
            <Button
               className="mt-12 !px-12 inline-flex items-center gap-2"
               onClick={getNewWordList}
            >
               <RefreshCw size={18} />
               حاول ثانية
            </Button>
         </div>
      );
   }

   if (state === "instructions") {
      return (
         <Instructions isMobile={isMobile} setState={() => setState("quiz")} />
      );
   }

   if (isLoading || !currentList || !shuffledWords.length || !loaded) {
      return (
         <div className="flex flex-col gap-2 items-center justify-center min-h-screen">
            <Spinner className="animate-spin" size="sm" />
            <p className="text-sm text-gray-500">
               {isSubmitting
                  ? "حفظ نتائج الاختبار ..."
                  : "يرجى الانتظار بينما نقوم بتحميل الاختبار ..."}
            </p>
         </div>
      );
   }

   return (
      <Fragment>
         <Card
            className={cn(
               "w-full p-2 !min-h-[50vh] relative",
               notoSans.className
            )}
         >
            <div className="absolute top-4 left-2 gap-2 w-[98%] text-center mx-auto">
               <Progress value={responses.length} className="mb-6 " />
            </div>
            <pre>{error}</pre>
            <div
               id="jspsych-experiment"
               className="!w-full !min-h-[50vh] !h-full !border-none outline-none flex flex-col items-center justify-center"
            >
               {isMobile ? (
                  <div className="flex justify-center items-center gap-4 absolute w-3/4 bottom-4">
                     <Button
                        variant="default"
                        onClick={(_) => {
                           const btn = document.getElementById(
                              `choice-ArrowLeft`
                           ) as HTMLButtonElement;
                           if (btn) {
                              btn.click();
                           }
                        }}
                        className="w-full md:w-32 h-12 text-lg bg-green-500"
                     >
                        نعم
                     </Button>
                     <Button
                        variant="destructive"
                        onClick={(_) => {
                           const btn = document.getElementById(
                              `choice-ArrowRight`
                           ) as HTMLButtonElement;
                           if (btn) {
                              btn.click();
                           }
                        }}
                        className="w-full md:w-32 h-12 text-lg text-white bg-red-500"
                     >
                        لا
                     </Button>
                  </div>
               ) : (
                  <span />
               )}
            </div>
         </Card>
      </Fragment>
   );
}
