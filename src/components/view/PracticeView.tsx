"use client";

import { useState, useEffect, useCallback } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/useMediaQuery";

// View
import QuizCard from "./QuizCard";
import Instructions from "./Instructions";

// Practice items from provided word list
const PRACTICE_ITEMS = [
  { word: "الطبيعية", isWord: true },
  { word: "انطلق", isWord: true },
  { word: "ترجع", isWord: true },
  { word: "تب", isWord: true },
  { word: "الزولن", isWord: false },
  { word: "مرتفع", isWord: true },
  { word: "الزولن", isWord: false },
  { word: "مانع", isWord: false },
  { word: "مرتع", isWord: false },
  { word: "مرتفع", isWord: true },
];

interface PracticeViewProps {
  onComplete: () => void;
}
export function PracticeView({ onComplete }: PracticeViewProps) {
  const isMobile = useMediaQuery("(max-width: 768px)");

  // States
  const [state, setState] = useState<string>("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [responses, setResponses] = useState<boolean[]>([]);
  const [shuffledItems, setShuffledItems] = useState<typeof PRACTICE_ITEMS>([]);
  const [showWord, setShowWord] = useState(true);

  // Constants for timing
  const FEEDBACK_DURATION = 200; // 200ms for feedback
  const STIMULUS_DURATION = 2000; // 2000ms (2 seconds) for word display

  // Shuffle items when component mounts
  useEffect(() => {
    const shuffled = [...PRACTICE_ITEMS]
      .sort(() => Math.random() - 0.5)
      .map((item, index) => ({ ...item, originalIndex: index }));
    setShuffledItems(shuffled);
  }, []);

  const currentItem = shuffledItems[currentIndex] || PRACTICE_ITEMS[0];
  const isComplete = currentIndex >= PRACTICE_ITEMS.length;

  const handleNextItem = useCallback(() => {
    if (currentIndex + 1 >= PRACTICE_ITEMS.length) {
      setState("completion");
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setShowFeedback(false);
    setIsCorrect(null);
    setShowWord(true);
  }, [currentIndex]);

  const handleResponse = useCallback(
    (response: boolean) => {
      if (showFeedback || isComplete) return;

      const correct = response === currentItem.isWord;
      setIsCorrect(correct);
      setShowFeedback(true);
      setShowWord(false);
      setResponses([...responses, correct]);

      // Automatically proceed to next item after feedback duration
      setTimeout(() => {
        handleNextItem();
      }, FEEDBACK_DURATION);
    },
    [currentItem.isWord, isComplete, responses, showFeedback, handleNextItem]
  );

  // Auto-hide word after STIMULUS_DURATION
  useEffect(() => {
    if (!showWord || showFeedback) return;

    const timer = setTimeout(() => {
      handleResponse(false); // Default to "no" if no response
    }, STIMULUS_DURATION);

    return () => clearTimeout(timer);
  }, [showWord, showFeedback, handleResponse]);

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
            ستبدأ أولاً بجلسة تدريبية للتعرف على كيفية الإجابة على الاختبار
          </p>
          <Button
            onClick={() => setState("instructions")}
            className="w-full md:w-auto"
          >
            التالي
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (state === "instructions") {
    return <Instructions isMobile={isMobile} setState={setState} />;
  }

  if (isComplete) {
    const correctCount = responses.filter(Boolean).length;
    const accuracy = (correctCount / PRACTICE_ITEMS.length) * 100;

    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-center">اكتمل التدريب!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-lg">
            لقد حصلت على {correctCount} من أصل {PRACTICE_ITEMS.length} صحيحة (
            {accuracy.toFixed(1)}%)
          </p>
          <Button
            onClick={() => setState("completion")}
            className="w-full md:w-auto"
          >
            التالي
          </Button>
        </CardContent>
      </Card>
    );
  }
  if (state === "completion") {
    return (
      <Card className="w-full max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center text-2xl">
            لقد أكملت جلسة التدريب
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-center">
          <Button onClick={onComplete} className="w-full md:w-auto">
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
