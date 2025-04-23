"use client";

import { useState, useEffect } from "react";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";
import { toast } from "sonner";

// Types
import { QuizAttempt } from "@prisma/client";

// Hooks
import { useRouter } from "next/navigation";
import {
   TwitterShareButton,
   WhatsappShareButton,
   TwitterIcon,
   WhatsappIcon,
} from "react-share";

interface ResultsViewProps {
   onNext: () => void;
   onRetake: () => void;
}

export default function ResultsView({ onNext, onRetake }: ResultsViewProps) {
   const [results, setResults] = useState<QuizAttempt | null>(null);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
   const shareUrl = window.location.origin;
   const router = useRouter();

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

   const getFeedbackMessage = (score: number, total: number): string => {
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

   const getTotalQuestions = (results: QuizAttempt) => {
      return (
         results.correctWords +
         results.incorrectWords +
         results.correctNonWords +
         results.incorrectNonWords
      );
   };

   const handleShare = async () => {
      if (!results) return;

      const totalQuestions = getTotalQuestions(results);
      const shareText = `I scored ${results.score} out of ${totalQuestions} on the Lexical Decision Task! Try it yourself!`;

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

   if (loading || !results) {
      return (
         <div className="flex flex-col gap-2 items-center justify-center min-h-[50vh]">
            <Spinner size="sm" />
            <p className="text-sm text-gray-500">
               يرجى الانتظار بينما نقوم بتحميل النتائج ...
            </p>
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

   const totalQuestions = getTotalQuestions(results);
   const shareText = `I scored ${results.score} out of ${totalQuestions} on the Lexical Decision Task! Try it yourself!`;
   console.log({ results });

   return (
      <Card>
         <CardHeader>
            <CardTitle>نتيجة الاختبار</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
            <div className="text-center">
               <p className="text-sm text-gray-500">الدرجة النهائية:</p>
               <p className="mt-1 text-4xl font-extrabold text-indigo-600">
                  {results.score?.toFixed(2)}%
               </p>
               <p className="mt-2 text-lg text-gray-700">
                  {getFeedbackMessage(results.score, totalQuestions)}
               </p>
            </div>

            <div className="text-center">
               <p className="text-sm text-gray-500">شارك نتيجتك مع الآخرين!</p>
               <div className="mt-4 flex justify-center space-x-4">
                  <TwitterShareButton url={shareUrl} title={shareText}>
                     <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareUrl} title={shareText}>
                     <WhatsappIcon size={32} round />
                  </WhatsappShareButton>
               </div>
               <Button className="mt-4" onClick={handleShare}>
                  مشاركة
               </Button>
            </div>

            <div className="flex justify-center gap-4 mt-8">
               <Button onClick={onRetake} variant="outline">
                  إعادة الاختبار
               </Button>
               <Button onClick={onNext}>العودة للصفحة الرئيسية</Button>
            </div>
         </CardContent>
      </Card>
   );
}
