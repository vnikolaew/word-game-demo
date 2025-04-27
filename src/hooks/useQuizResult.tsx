"use client";
import { QuizAttempt } from "@prisma/client";
import { useState, useEffect } from "react";
import { toast } from "sonner";

const feedbackMessages = [
   {
      range: [-100, 0],
      message: "تحتاج إلى تحسين معرفتك بالكلمات العربية.",
   },
   {
      range: [1, 25],
      message: "معرفتك بالكلمات العربية محدودة، واصل التعلم.",
   },
   { range: [26, 50], message: "مستوى متواضع في تمييز الكلمات العربية." },
   { range: [51, 70], message: "مستوى جيد في معرفة الكلمات العربية." },
   {
      range: [71, 80],
      message: "مستوى جيد جداً في تمييز الكلمات العربية.",
   },
   { range: [81, 90], message: "مستوى ممتاز في معرفة الكلمات العربية." },
   {
      range: [91, 95],
      message: "مستوى متقدم جداً في معرفة الكلمات العربية.",
   },
   {
      range: [96, 100],
      message: "معرفة استثنائية بالكلمات العربية. أحسنت!",
   },
];

export function useQuizResult() {
   const [results, setResults] = useState<QuizAttempt | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const shareUrl = window.location.origin;

   useEffect(() => {
      const fetchResults = async () => {
         try {
            const response = await fetch("/api/quiz/attempts/latest");
            if (!response.ok) {
               if (response.status === 404) {
                  toast.error("لم يتم العثور على نتائج");
                  setError("لم يتم العثور على نتائج");
               }
               toast.error("فشل في تحميل النتائج");
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
      for (const {
         range: [min, max],
         message,
      } of feedbackMessages) {
         if (score >= min && score <= max) {
            return message;
         }
      }
      return feedbackMessages[0].message;
   };

   const handleShare = async () => {
      if (!results) return;

      const shareText = `I scored ${results.score} out of ${100} on the Lexical Decision Task! Try it yourself!`;

      try {
         if (navigator.share) {
            await navigator.share({
               title: "My Quiz Results",
               text: shareText,
               url: shareUrl,
            });
         } else {
            await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
            toast.success("تم نسخ النتائج إلى الحافظة!");
         }
      } catch (error) {
         console.error("Error sharing:", error);
      }
   };

   return {
      results,
      error,
      loading,
      shareUrl,
      getFeedbackMessage,
      handleShare,
   };
}
