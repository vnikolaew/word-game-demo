"use client";
import ResultsView from "@/components/view/ResultsView";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

function ClientPage() {
   const router = useRouter();

   const handleResultsComplete = () => {
      router.push("/");
   };

   const handleRetake = () => {
      router.push(`/quiz`);
   };

   useEffect(() => {
      const elements = [`header`, `footer`];
      elements.forEach((e) => {
         const element = document.querySelector(e) as HTMLElement;
         element.style.visibility = `hidden`;
      });
   }, []);

   return (
      <div className="mx-auto py-12">
         <ResultsView onNext={handleResultsComplete} onRetake={handleRetake} />
      </div>
   );
}

export default ClientPage;
