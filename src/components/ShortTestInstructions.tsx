"use client";
import React from "react";
import { ShortTestInstructions as InstructionsArray } from "@/app/quiz/proficiency/words";

export const ShortTestInstructions: React.FC = () => (
   <div className="mb-8">
      {InstructionsArray.map((instruction, index) => (
         <p key={index} className="text-base justify text-center mb -1">
            {instruction}
         </p>
      ))}
   </div>
);
