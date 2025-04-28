"use client";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// View
import QuizCard from "./QuizCard";
import Instructions from "./Instructions";
import { usePracticeQuiz } from "@/hooks/usePracticeQuiz";

// Practice items from provided word list
const PRACTICE_ITEMS = [
   { word: "النقابية", isWord: true },
   { word: "انطباق", isWord: true },
   { word: "بدوي", isWord: true },
   { word: "ترجيح", isWord: true },
   { word: "ثاب", isWord: true },
   { word: "لقطاقال", isWord: false },
   { word: "أُفوقون", isWord: false },
   { word: "بشرض", isWord: false },
   { word: "ماتوح", isWord: false },
   { word: "ضرء", isWord: false },
];

interface PracticeViewProps {
   onComplete: () => void;
}

export type AppState = `intro` | `instructions` | `completion` | `practice`;

export function PracticeView({ onComplete }: PracticeViewProps) {
   const {
      state,
      currentIndex,
      isMobile,
      showFeedback,
      isCorrect,
      showWord,
      currentItem,
      isComplete,
      correctCount,
      accuracy,
      handleResponse,
      setState,
   } = usePracticeQuiz();

   if (state === "intro") {
      return (
         <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
               <CardTitle className="text-center text-2xl">
                  مرحباً بك في جلسة التدريب
               </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6 text-center">
               <p className="text-lg">
                  ستبدأ أولاً بجلسة تدريبية للتعرف على كيفية الإجابة على
                  الاختبار
               </p>
               <Button
                  onClick={() => setState("instructions")}
                  className="w-full md:w-auto !px-12 mt-8"
               >
                  التالي
               </Button>
            </CardContent>
         </Card>
      );
   }

   if (state === "instructions") {
      return <Instructions practice isMobile={isMobile} setState={setState} />;
   }

   if (isComplete) {
      return (
         <Card className="max-w-3/4 mx-auto">
            <CardHeader>
               <CardTitle className="text-center">اكتمل التدريب!</CardTitle>
            </CardHeader>
            <CardContent className="text-center space-y-4 mt-8">
               <p className="text-2xl">
                  حصلت على <b>{correctCount}</b> من{" "}
                  <b>{PRACTICE_ITEMS.length}</b> نقاط (
                  <b>{accuracy.toFixed(1)}%</b>)
               </p>
               <Button
                  onClick={onComplete}
                  className="w-full md:w-auto !px-12 mt-8"
               >
                  ابدأ الاختبار الرئيسي
               </Button>
            </CardContent>
         </Card>
      );
   }

   return (
      <QuizCard
         progress={(currentIndex / PRACTICE_ITEMS.length) * 100}
         showWord={showWord}
         currentWord={currentItem.word}
         showFeedback={showFeedback}
         isCorrect={isCorrect ?? false}
         isMobile={isMobile}
         handleResponse={handleResponse}
      />
   );
}
