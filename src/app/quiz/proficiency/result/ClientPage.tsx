"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";

import animationData from "@/../public/result_animation.json";
import ShareButtons from "./ShareButtons";
import { APP_NAME } from "@/lib/consts";

interface QuizResult {
   score: number;
   timeTaken: number;
}

function Page() {
   const router = useRouter();
   const [result, setResult] = useState<QuizResult | null>(null);

   useEffect(() => {
      if (typeof window !== `undefined`) {
         const storedResult = localStorage.getItem("quizResult");
         if (storedResult) {
            setResult(JSON.parse(storedResult));
         }
      }
   }, []);

   if (!result) {
      return (
         <div className="text-center text-2xl mt-10">جاري تحميل النتائج...</div>
      );
   }

   const shareTitle = `حصلت على ${result.score}٪ في اختبار كَلِم (${APP_NAME})!`;

   const formatTime = (seconds: number) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = Math.floor(seconds % 60);
      return `${minutes} دقيقة و ${remainingSeconds} ثانية`;
   };

   return (
      <div className="max-w-4xl mx-auto p-8 text-center bg-purple-50 rounded-lg shadow-lg">
         <h1 className="text-4xl font-bold mb-10 text-purple-700">
            نتائج اختبار كَلِم
         </h1>

         <div className="mb-10 flex justify-center">
            <Lottie
               animationData={animationData}
               style={{ width: 200, height: 200 }}
               loop={true}
               autoplay={true}
            />
         </div>

         <div className="mb-10 p-6 bg-white rounded-lg shadow">
            <h2 className="text-3xl font-semibold mb-6 text-gray-800">
               أداؤك في الاختبار
            </h2>
            <p className="text-2xl mb-4">
               <span className="font-bold text-purple-600">درجتك:</span>{" "}
               {result.score.toFixed(2)}٪
            </p>
            <p className="text-xl">
               <span className="font-bold text-purple-600">
                  الوقت المستغرق:
               </span>{" "}
               {formatTime(result.timeTaken)}
            </p>
         </div>

         <div className="mb-10 p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">
               شارك نتيجتك مع الآخرين
            </h2>
            <p className="mb-4 text-gray-600">
               أخبر أصدقاءك عن أدائك في اختبار كَلِم!
            </p>
            <ShareButtons title={shareTitle} />
         </div>

         <Button
            onClick={() => router.push("/quiz?screen=practice")}
            className="text-lg py-3 px-12  text-white rounded-full transition duration-300 ease-in-out transform "
         >
            انتقل إلى الاختبار الرئيسي
         </Button>
      </div>
   );
}

export default Page;
