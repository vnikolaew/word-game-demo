"use client";

import { useState, useEffect, useCallback } from "react";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Practice items - Arabic only
const PRACTICE_ITEMS = [
  { word: "كتاب", isWord: true },
  { word: "قزت", isWord: false },
  { word: "شجرة", isWord: true },
  { word: "قوز", isWord: false },
  { word: "بيت", isWord: true },
  { word: "بنم", isWord: false },
  { word: "سيارة", isWord: true },
  { word: "وزي", isWord: false },
  { word: "كلب", isWord: true },
  { word: "جقو", isWord: false },
];

interface PracticeViewProps {
  onComplete: () => void;
}

export function PracticeView({ onComplete }: PracticeViewProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFeedback, setShowFeedback] = useState(false);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [responses, setResponses] = useState<boolean[]>([]);

  const currentItem = PRACTICE_ITEMS[currentIndex];
  const isComplete = currentIndex >= PRACTICE_ITEMS.length;

  const handleResponse = useCallback(
    (response: boolean) => {
      if (showFeedback || isComplete) return;

      const correct = response === currentItem.isWord;
      setIsCorrect(correct);
      setShowFeedback(true);
      setResponses([...responses, correct]);
    },
    [currentItem.isWord, isComplete, responses, showFeedback]
  );

  const handleNextItem = useCallback(() => {
    if (currentIndex + 1 >= PRACTICE_ITEMS.length) {
      onComplete();
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setShowFeedback(false);
    setIsCorrect(null);
  }, [currentIndex, onComplete]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (showFeedback) {
        if (event.key === "Enter" || event.key === " ") {
          handleNextItem();
        }
        return;
      }

      if (event.key === "ArrowRight") {
        handleResponse(true);
      } else if (event.key === "ArrowLeft") {
        handleResponse(false);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [currentIndex, handleNextItem, handleResponse, showFeedback]);

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
          <Button onClick={onComplete} className="w-full md:w-auto">
            ابدأ الاختبار
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Card className="w-full p-6">
        <div className="text-center">
          <Progress
            value={(currentIndex / PRACTICE_ITEMS.length) * 100}
            className="mb-6"
          />
          <div className="flex justify-center items-center h-[200px]">
            {!showFeedback ? (
              <h2 className="text-4xl font-bold mb-8">{currentItem.word}</h2>
            ) : (
              <div className="text-center">
                <p
                  className={`text-xl font-semibold mb-4 ${
                    isCorrect ? "text-green-600" : "text-red-600"
                  }`}
                >
                  {isCorrect ? "إجابة صحيحة!" : "إجابة خاطئة"}
                </p>
                <Button onClick={handleNextItem} className="w-full md:w-auto">
                  التالي
                </Button>
              </div>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-4">
            اضغط على مفتاح السهم الأيمن (→) للإجابة بـ &quot;نعم&quot; أو مفتاح
            السهم الأيسر (←) للإجابة بـ &quot;لا&quot;
          </p>
          {!showFeedback && (
            <div className="flex flex-row justify-center gap-4">
              <Button
                variant="default"
                onClick={() => handleResponse(true)}
                className="w-full md:w-32 h-12 text-lg"
              >
                نعم
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleResponse(false)}
                className="w-full md:w-32 h-12 text-lg text-white"
              >
                لا
              </Button>
            </div>
          )}
        </div>
      </Card>
    </div>
  );
}
