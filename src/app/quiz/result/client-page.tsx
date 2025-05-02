"use client";
import ResultsView from "@/components/view/ResultsView";
import { showHeaderAndFooter } from "@/lib/utils";
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
      document.body.classList.add(`!bg-transparent`);
      showHeaderAndFooter();
   }, []);

   return (
      <div className="mx-auto py-12">
         <ResultsView onNext={handleResultsComplete} onRetake={handleRetake} />
      </div>
   );
}

export default ClientPage;
