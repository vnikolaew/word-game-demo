"use client";
import React from "react";
import { useProficiencyQuiz } from "./hooks";
import InstructionsOne from "./InstructionsOne";
import InstructionsTwo from "./InstructionsTwo";
import QuizPage from "./QuizPage";
import { match } from "ts-pattern";

export const dynamic = "force-dynamic";

function Page() {
   const { setState, state } = useProficiencyQuiz();

   function handleNextPage(): void {
      setState(`instructions-2`);
   }

   function handleStartQuiz(): void {
      setState(`quiz`);
   }

   return match(state)
      .with(`instructions`, (_) => <InstructionsOne onNext={handleNextPage} />)
      .with(`instructions-2`, (_) => (
         <InstructionsTwo onNext={handleStartQuiz} />
      ))
      .with(`quiz`, (_) => <QuizPage />)
      .otherwise((_) => null);
}

export default Page;
