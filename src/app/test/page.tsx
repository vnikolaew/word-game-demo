"use client";
import Head from "next/head";
import { TOTAL_WORDS, useExperiment } from "./hooks";
import { Progress } from "@/components/ui/progress";
import { Fragment, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Noto_Sans_Arabic } from "next/font/google";
import { Spinner } from "@/components/ui/Spinner";
import Instructions from "@/components/view/Instructions";

const notoSans = Noto_Sans_Arabic({
   variable: "--font-arabic",
   weight: "400",
   subsets: ["arabic"],
   display: "swap",
});

export default function Experiment() {
   const [state, setState] = useState<string>("instructions");
   const {
      responses,
      show,
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
               router.push(`/quiz/result`);
            }
         });
      }
   }, [responses.length, router, submitQuizAttempt]);

   if (error || wordListError) {
      return (
         <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-red-500 mb-4">{error || wordListError}</p>
            <Button onClick={getNewWordList}>حاول ثانية</Button>
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
            <Spinner size="sm" />
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
         <Head>
            <link
               href="https://unpkg.com/jspsych@8.2.1/css/jspsych.css"
               rel="stylesheet"
               type="text/css"
            />
         </Head>
         <div className="flex flex-col items-center gap-2 mt-12">
            <Progress value={responses.length} className="mb-6" />
         </div>
         <Card
            className={cn(
               "w-full p-6 !min-h-[30vh] relative",
               notoSans.className
            )}
         >
            <div
               id="jspsych-experiment"
               className="!w-full !min-h-[30vh] !h-full !border-none outline-none flex flex-col items-center justify-center"
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
