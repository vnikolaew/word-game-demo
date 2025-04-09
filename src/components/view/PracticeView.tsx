"use client";

import { useState, useEffect } from "react";
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
  }, [currentIndex, showFeedback]);

  const handleResponse = (response: boolean) => {
    if (showFeedback || isComplete) return;

    const correct = response === currentItem.isWord;
    setIsCorrect(correct);
    setShowFeedback(true);
    setResponses([...responses, correct]);
  };

  const handleNextItem = () => {
    if (currentIndex + 1 >= PRACTICE_ITEMS.length) {
      onComplete();
      return;
    }

    setCurrentIndex(currentIndex + 1);
    setShowFeedback(false);
    setIsCorrect(null);
  };

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
          <Button onClick={onComplete}>ابدأ الاختبار</Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-center">
          تدريب على التعرف على الكلمات
        </CardTitle>
        <p className="text-center text-muted-foreground">
          هل هذه كلمة عربية حقيقية؟ اضغط على نعم أو لا
        </p>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <Progress
            value={(currentIndex / PRACTICE_ITEMS.length) * 100}
            className="mb-4"
          />
          <p className="text-sm text-muted-foreground mb-2">
            الكلمة {currentIndex + 1} من {PRACTICE_ITEMS.length}
          </p>
          <div className="text-4xl font-bold mb-4">{currentItem.word}</div>

          {!showFeedback ? (
            <div className="flex justify-center space-x-4">
              <Button variant="default" onClick={() => handleResponse(true)}>
                نعم
              </Button>
              <Button
                variant="destructive"
                onClick={() => handleResponse(false)}
              >
                لا
              </Button>
            </div>
          ) : (
            <div className="text-center">
              <p
                className={`text-xl font-semibold mb-4 ${
                  isCorrect ? "text-green-600" : "text-red-600"
                }`}
              >
                {isCorrect ? "إجابة صحيحة!" : "إجابة خاطئة"}
              </p>
              <Button onClick={handleNextItem}>التالي</Button>
            </div>
          )}
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            اضغط على مفتاح السهم الأيمن (→) للإجابة بـ &quot;نعم&quot; أو مفتاح
            السهم الأيسر (←) للإجابة بـ &quot;لا&quot;
          </p>
          <p className="mt-2">
            اضغط على مفتاح المسافة أو الإدخال للمتابعة بعد الملاحظات
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
