"use client";
import { SurveyView } from "@/components/view/SurveyView";
import { useRouter } from "next/navigation";
import React from "react";

function SurveyClient() {
   const router = useRouter();
   const onComplete = () => router.push(`/quiz/result`);

   return (
      <div className="mx-auto py-12">
         <SurveyView onComplete={onComplete} />
      </div>
   );
}

export default SurveyClient;
