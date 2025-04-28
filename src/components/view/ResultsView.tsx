"use client";

// Components
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";

import {
   TwitterShareButton,
   WhatsappShareButton,
   TwitterIcon,
   WhatsappIcon,
} from "react-share";
import { motion } from "framer-motion";
import { useQuizResult } from "@/hooks/useQuizResult";

interface ResultsViewProps {
   onNext: () => void;
   onRetake: () => void;
}

export default function ResultsView({ onNext, onRetake }: ResultsViewProps) {
   const {
      error,
      getFeedbackMessage,
      handleShare,
      loading,
      results,
      shareUrl,
   } = useQuizResult();

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

   const shareTextAr = `حصلت على درجة ${results.score} من ${100} في اختبار حروفنا! جرب الاختبار #اختبار_حروفنا #الكلمات_العربية`;

   return (
      <Card>
         <CardHeader>
            <CardTitle>نتيجة الاختبار</CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
            <div className="text-center">
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.0 }}
                  className="text-sm text-gray-500"
               >
                  الدرجة النهائية:
               </motion.p>
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.0 }}
                  className="mt-1 text-4xl font-extrabold text-indigo-600"
               >
                  {results.score?.toFixed(2)}%
               </motion.p>
               <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                  className="mt-2 text-lg text-gray-700"
               >
                  {getFeedbackMessage(results.score)}
               </motion.p>
            </div>

            <div className="text-center">
               <p className="text-sm text-gray-500">شارك نتيجتك مع الآخرين!</p>
               <div className="mt-4 flex justify-center space-x-4">
                  <TwitterShareButton url={shareUrl} title={shareTextAr}>
                     <TwitterIcon size={32} round />
                  </TwitterShareButton>
                  <WhatsappShareButton url={shareUrl} title={shareTextAr}>
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
