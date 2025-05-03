"use client";
import React from "react";
import { MainSecondInstructions } from "./words";
import { Button } from "@/components/ui/button";

function InstructionsTwo({ onNext }: { onNext: () => void }) {
   return (
      <div className="max-w-4xl mx-auto p-4 text-wrap">
         <h1 className="text-3xl font-bold mb-20 text-center">
            تعليمات الاختبار
         </h1>
         <ul className="list-none space-y-4 mb-8">
            {MainSecondInstructions.map((instruction, index) => (
               <li
                  key={index}
                  className="flex items-start space-x-reverse space-x-4"
               >
                  <span className="mr-2 mt-1 mb-2">-</span>
                  <span className="text-lg">{instruction}</span>
               </li>
            ))}
         </ul>
         <div className="text-center">
            <Button
               type="button"
               onClick={onNext}
               className="text-lg py-2 px-12"
            >
               ابدأ الاختبار
            </Button>
         </div>
      </div>
   );
}

export default InstructionsTwo;
