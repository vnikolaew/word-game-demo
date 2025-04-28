"use client";

import { Button } from "@/components/ui/button";
import { Spinner } from "../ui/Spinner";
import QuizCard from "./QuizCard";
import Instructions from "./Instructions";

import { useQuiz } from "@/hooks/useQuiz";

interface QuizViewProps {
   onComplete: () => void;
}

const TOTAL_WORDS = 100;

export default function QuizView({ onComplete }: QuizViewProps) {
   const {
      currentList,
      currentWordIndex,
      error,
      handleResponse,
      isMobile,
      showFeedback,
      state,
      wordListError,
      loadWordList,
      isLoading,
      isSubmitting,
      shuffledWords,
      setState,
      isCorrect,
      showWord,
   } = useQuiz({ onComplete });

   if (error || wordListError) {
      return (
         <div className="flex flex-col items-center justify-center min-h-screen">
            <p className="text-red-500 mb-4">{error || wordListError}</p>
            <Button onClick={loadWordList}>حاول ثانية</Button>
         </div>
      );
   }

   if (state === "instructions") {
      return (
         <Instructions isMobile={isMobile} setState={() => setState("quiz")} />
      );
   }

   if (isLoading || !currentList || !shuffledWords.length) {
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
      />
   );
}
