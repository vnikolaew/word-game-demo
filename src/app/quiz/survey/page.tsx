"use client";
import { SurveyView } from "@/components/view/SurveyView";
import { __IS_PROD__ } from "@/lib/consts";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
   const router = useRouter();
   if (__IS_PROD__) return null;

   return (
      <div className="mx-auto py-12">
         <SurveyView onComplete={(_) => router.push(`/`)} />
      </div>
   );
}

export default Page;
