"use client";
import React from "react";
import {ShortTestInstructions as InstructionsArray, ShortTestInstructionsEn} from "@/app/quiz/proficiency/words";

export const ShortTestInstructions: React.FC = () => (
    <div className="mb-8">
       {ShortTestInstructionsEn.map((instruction, index) => (
           <div key={index}>
              <p dir="ltr" className="text-base justify text-center mb-1 font-semibold">
                 {instruction}
              </p>
           </div>
       ))}
       <br/>
       {InstructionsArray.map((instruction, index) => (
           <div key={index}>
              <p className="text-base justify text-center mb-1">
                 {instruction}
              </p>
           </div>
       ))}
    </div>
);
