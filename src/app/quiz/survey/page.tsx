"use client";
import { SurveyView } from "@/components/view/SurveyView";
import { useRouter } from "next/navigation";
import React from "react";

function Page() {
   const router = useRouter();

   return (
      <div className="mx-auto py-12">
         <SurveyView onComplete={(_) => router.push(`/`)} />
      </div>
   );
}

export default Page;
