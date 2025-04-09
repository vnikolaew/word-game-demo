"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

interface QuizItem {
  id: string;
  word: string;
  isNonWord: boolean;
}

interface QuizResponse {
  word: string;
  isCorrect: boolean;
  userResponse: boolean;
  isNonWord: boolean;
  responseTime: number;
}

interface QuizViewProps {
  onComplete: (score: number) => void;
}

export default function QuizView({ onComplete }: QuizViewProps) {
  const [wordList, setWordList] = useState<QuizItem[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [startTime, setStartTime] = useState<number>(0);
  const [wordListId, setWordListId] = useState<string>("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    fetchWordList();
  }, []);

  const fetchWordList = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/quiz/word-list?locale=ar`);
      if (!response.ok) {
        if (response.status === 404) {
          setError("حدث خطأ في تحميل قائمة الكلمات");
        } else {
          throw new Error("فشل في تحميل قائمة الكلمات");
        }
        return;
      }
      const data = await response.json();
      setWordList(data.words);
      setWordListId(data.id);
      setStartTime(Date.now());
    } catch (err) {
      setError(err instanceof Error ? err.message : "حدث خطأ");
      toast.error("حدث خطأ في تحميل قائمة الكلمات");
    } finally {
      setLoading(false);
    }
  };

  const handleResponse = async (isWord: boolean) => {
    if (currentIndex >= wordList.length) return;

    const currentWord = wordList[currentIndex];
    const isCorrect = isWord === !currentWord.isNonWord;
    const responseTime = Date.now() - startTime;

    const response: QuizResponse = {
      word: currentWord.word,
      isCorrect,
      userResponse: isWord,
      isNonWord: currentWord.isNonWord,
      responseTime,
    };

    try {
      const result = await fetch("/api/quiz/attempts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(response),
      });

      if (!result.ok) {
        throw new Error("فشل في حفظ الإجابة");
      }

      setResponses([...responses, response]);

      if (currentIndex === wordList.length - 1) {
        await saveResults(responses);
      } else {
        setCurrentIndex(currentIndex + 1);
        setStartTime(Date.now());
      }
    } catch (err) {
      toast.error("حدث خطأ في حفظ الإجابة");
      console.error("Error saving response:", err);
    }
  };

  const saveResults = async (finalResponses: QuizResponse[]) => {
    try {
      const correctWords = finalResponses.filter(
        (r) => !r.isNonWord && r.isCorrect
      ).length;
      const incorrectWords = finalResponses.filter(
        (r) => !r.isNonWord && !r.isCorrect
      ).length;
      const correctNonWords = finalResponses.filter(
        (r) => r.isNonWord && r.isCorrect
      ).length;
      const incorrectNonWords = finalResponses.filter(
        (r) => r.isNonWord && !r.isCorrect
      ).length;

      const totalCorrect = correctWords + correctNonWords;
      const score = (totalCorrect / finalResponses.length) * 100;
      const completionTime = finalResponses.reduce(
        (sum, r) => sum + r.responseTime,
        0
      );

      const response = await fetch("/api/quiz/attempts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          wordListId,
          score,
          correctWords,
          incorrectWords,
          correctNonWords,
          incorrectNonWords,
          completionTime,
          responses: finalResponses,
        }),
      });

      if (!response.ok) {
        throw new Error("فشل في حفظ النتائج");
      }

      toast.success("تم إكمال الاختبار بنجاح");
      onComplete(score);
    } catch (error) {
      console.error("Error saving results:", error);
      toast.error("حدث خطأ في حفظ النتائج");
    }
  };

  if (loading) {
    return <div>جاري التحميل...</div>;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center gap-4">
        <p className="text-red-500">{error}</p>
        <Button onClick={() => router.push("/dashboard")}>
          العودة إلى لوحة التحكم
        </Button>
      </div>
    );
  }

  if (currentIndex >= wordList.length) {
    return <div>جاري معالجة النتائج...</div>;
  }

  const progress = (currentIndex / wordList.length) * 100;
  const currentWord = wordList[currentIndex];

  return (
    <div className="flex flex-col items-center justify-center gap-8 rtl">
      <Progress value={progress} className="w-full" />
      <Card className="p-6">
        <h2 className="mb-4 text-2xl font-bold text-center font-arabic">
          {currentWord.word}
        </h2>
        <div className="flex justify-center gap-4">
          <Button
            variant="default"
            onClick={() => handleResponse(true)}
            className="w-32"
          >
            نعم
          </Button>
          <Button
            variant="outline"
            onClick={() => handleResponse(false)}
            className="w-32"
          >
            لا
          </Button>
        </div>
      </Card>
    </div>
  );
}
