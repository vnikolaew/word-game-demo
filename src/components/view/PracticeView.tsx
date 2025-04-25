"use client";

import { useState, useEffect, useCallback, useMemo } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// View
import QuizCard from "./QuizCard";
import Instructions from "./Instructions";

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
   const isMobile = useMediaQuery("(max-width: 768px)");

   // States
   const [state, setState] = useState<AppState>("intro");
   const [currentIndex, setCurrentIndex] = useState(0);
   const [showFeedback, setShowFeedback] = useState(false);
   const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
   const [responses, setResponses] = useState<boolean[]>([]);

   const [shuffledItems, setShuffledItems] = useState<typeof PRACTICE_ITEMS>(
      []
   );

   useEffect(() => {
      setShuffledItems(
         [...PRACTICE_ITEMS]
            .sort(() => Math.random() - 0.5)
            .map((item, index) => ({ ...item, originalIndex: index }))
      );
   }, []);

   const [showWord, setShowWord] = useState(true);

   // Constants for timing
   const FEEDBACK_DURATION = 200; // 200ms for feedback
   const STIMULUS_DURATION = 2000; // 2000ms (2 seconds) for word display

   const currentItem = useMemo(
      () => shuffledItems[currentIndex] || shuffledItems[0],
      [currentIndex, shuffledItems]
   );
   const isComplete = useMemo(
      () => currentIndex >= shuffledItems.length,
      [currentIndex, shuffledItems]
   );

   const correctCount = useMemo(
      () => responses.filter((_) => _ === true).length,
      [responses]
   );
   const accuracy = useMemo(
      () => (correctCount / shuffledItems.length) * 100,
      [correctCount, shuffledItems]
   );

   const handleNextItem = useCallback(() => {
      if (currentIndex + 1 > PRACTICE_ITEMS.length) {
         setState("completion");
         return;
      }

      setCurrentIndex(currentIndex + 1);
      setShowFeedback(false);
      setIsCorrect(null);
      setShowWord(true);
   }, [
      currentIndex,
      setState,
      setCurrentIndex,
      setShowFeedback,
      setIsCorrect,
      setShowWord,
   ]);

   const handleResponse = useCallback(
      (response: boolean) => {
         if (showFeedback || isComplete) return;

         const correct = response === currentItem.isWord;
         setIsCorrect(correct);
         setShowFeedback(true);
         setShowWord(false);
         setResponses((r) => [...r, correct]);

         // Automatically proceed to next item after feedback duration
         setTimeout(() => {
            handleNextItem();
         }, FEEDBACK_DURATION);
      },
      [currentItem, isComplete, showFeedback, handleNextItem]
   );

   // Auto-hide word after STIMULUS_DURATION
   useEffect(() => {
      if (!showWord || showFeedback || state !== `practice`) return;

      const timer = setTimeout(() => {
         handleResponse(false); // Default to "no" if no response
      }, STIMULUS_DURATION);

      return () => clearTimeout(timer);
   }, [showWord, showFeedback, handleResponse, state]);

   useEffect(() => {
      if (isMobile) return; // Early return for mobile devices - no keyboard controls

      const handleKeyPress = (event: KeyboardEvent) => {
         if (showFeedback) return;

         if (event.key === "ArrowRight") {
            handleResponse(true);
         } else if (event.key === "ArrowLeft") {
            handleResponse(false);
         }
      };

      window.addEventListener("keydown", handleKeyPress);
      return () => window.removeEventListener("keydown", handleKeyPress);
   }, [handleResponse, showFeedback, isMobile]);

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
