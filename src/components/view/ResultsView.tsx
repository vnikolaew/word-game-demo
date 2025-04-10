"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "sonner";

interface QuizResults {
  score: number;
  correct_words: number;
  incorrect_words: number;
  correct_non_words: number;
  incorrect_non_words: number;
  completion_time: number;
}

interface ResultsViewProps {
  score: number;
  onNext: () => void;
}

export function ResultsView({ score, onNext }: ResultsViewProps) {
  const [results, setResults] = useState<QuizResults | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        const response = await fetch("/api/quiz/attempts/latest");
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error("لم يتم العثور على نتائج");
          }
          throw new Error("فشل في تحميل النتائج");
        }
        const data = await response.json();
        setResults(data);
      } catch (error) {
        setError(
          error instanceof Error ? error.message : "فشل في تحميل النتائج"
        );
        toast.error("فشل في تحميل النتائج");
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, []);

  const getFeedbackMessage = (score: number): string => {
    const feedbackMessages = [
      { range: [-100, 0], message: "تحتاج إلى تحسين معرفتك بالكلمات العربية." },
      {
        range: [1, 25],
        message: "معرفتك بالكلمات العربية محدودة، واصل التعلم.",
      },
      { range: [26, 50], message: "مستوى متواضع في تمييز الكلمات العربية." },
      { range: [51, 70], message: "مستوى جيد في معرفة الكلمات العربية." },
      { range: [71, 80], message: "مستوى جيد جداً في تمييز الكلمات العربية." },
      { range: [81, 90], message: "مستوى ممتاز في معرفة الكلمات العربية." },
      {
        range: [91, 95],
        message: "مستوى متقدم جداً في معرفة الكلمات العربية.",
      },
      { range: [96, 100], message: "معرفة استثنائية بالكلمات العربية. أحسنت!" },
    ];

    for (const { range, message } of feedbackMessages) {
      if (score >= range[0] && score <= range[1]) {
        return message;
      }
    }
    return feedbackMessages[0].message;
  };

  const handleShare = async () => {
    if (!results) return;

    const shareText = `حصلت على ${results.score.toFixed(
      1
    )} من 100 في اختبار #حروفنا! 🎉\nجرّب الاختبار وشاركنا نتيجتك:\n##اللغة_العربية #تقييم_الكلمات`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "نتائج اختبار حروفنا",
          text: shareText,
          url: window.location.href,
        });
      } catch (error) {
        if (error instanceof Error && error.name !== "AbortError") {
          console.error("Error sharing:", error);
        }
      }
    } else {
      try {
        await navigator.clipboard.writeText(
          `${shareText}\n${window.location.href}`
        );
        toast.success("تم نسخ النتائج إلى الحافظة!");
      } catch (error) {
        console.error("Error copying to clipboard:", error);
      }
    }
  };

  if (loading || !results) {
    return (
      <div className="flex items-center justify-center min-h-[50vh]">
        <Spinner size="lg" />
      </div>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="text-center py-6">
          <div className="text-red-600 mb-4">{error}</div>
          <Button onClick={() => window.location.reload()}>
            حاول مرة أخرى
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>نتيجة الاختبار</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">الدرجة النهائية:</p>
          <p className="mt-1 text-4xl font-extrabold text-indigo-600">
            {results.score.toFixed(1)}%
          </p>
          <p className="mt-2 text-lg text-gray-700">
            {getFeedbackMessage(results.score)}
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">شارك نتيجتك مع الآخرين!</p>
          <div className="mt-4 flex justify-center space-x-4">
            <Button variant="outline" onClick={handleShare}>
              مشاركة
            </Button>
            <Button onClick={onNext}>أعد الاختبار!</Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
