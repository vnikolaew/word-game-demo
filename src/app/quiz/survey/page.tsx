"use client";
import { SurveyView } from "@/components/view/SurveyView";
import { __IS_PROD__ } from "@/lib/consts";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
   const router = useRouter();
   const onComplete = () => router.push(`/quiz/result`);

   return (
      <div className="mx-auto py-12">
         <SurveyView onComplete={onComplete} />
      </div>
   );
}

export default Page;
