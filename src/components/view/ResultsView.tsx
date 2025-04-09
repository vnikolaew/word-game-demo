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

  const handleShare = async () => {
    if (!results) return;

    const shareText = `لقد حصلت على ${results.score.toFixed(
      1
    )}% في اختبار الكلمات العربية!`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: "نتائج اختبار الكلمات",
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
        alert("تم نسخ النتائج إلى الحافظة!");
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

  const totalWords = results.correct_words + results.incorrect_words;
  const totalNonWords = results.correct_non_words + results.incorrect_non_words;
  const wordAccuracy = (results.correct_words / totalWords) * 100;
  const nonWordAccuracy = (results.correct_non_words / totalNonWords) * 100;
  const overallAccuracy =
    ((results.correct_words + results.correct_non_words) /
      (totalWords + totalNonWords)) *
    100;

  return (
    <Card>
      <CardHeader>
        <CardTitle>نتائج الاختبار</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">النتيجة الإجمالية</p>
          <p className="mt-1 text-4xl font-extrabold text-indigo-600">
            {results.score.toFixed(1)}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              التعرف على الكلمات
            </h3>
            <dl className="space-y-1">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">صحيح:</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {results.correct_words}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">خطأ:</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {results.incorrect_words}
                </dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-1">
                <dt className="text-sm text-gray-500">الدقة:</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {wordAccuracy.toFixed(1)}%
                </dd>
              </div>
            </dl>
          </div>

          <div className="bg-gray-50 p-4 rounded-lg">
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              التعرف على الكلمات غير الحقيقية
            </h3>
            <dl className="space-y-1">
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">صحيح:</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {results.correct_non_words}
                </dd>
              </div>
              <div className="flex justify-between">
                <dt className="text-sm text-gray-500">خطأ:</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {results.incorrect_non_words}
                </dd>
              </div>
              <div className="flex justify-between border-t border-gray-200 pt-1">
                <dt className="text-sm text-gray-500">الدقة:</dt>
                <dd className="text-sm font-medium text-gray-900">
                  {nonWordAccuracy.toFixed(1)}%
                </dd>
              </div>
            </dl>
          </div>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">الدقة الإجمالية</p>
          <p className="mt-1 text-2xl font-bold text-gray-900">
            {overallAccuracy.toFixed(1)}%
          </p>
        </div>

        <div className="text-center">
          <p className="text-sm text-gray-500">وقت الإكمال</p>
          <p className="mt-1 text-lg font-medium text-gray-900">
            {(results.completion_time / 1000).toFixed(1)} ثانية
          </p>
        </div>

        <div className="mt-8 flex justify-center space-x-4">
          <Button variant="outline" onClick={handleShare}>
            مشاركة
          </Button>
          <Button onClick={onNext}>متابعة</Button>
        </div>
      </CardContent>
    </Card>
  );
}
