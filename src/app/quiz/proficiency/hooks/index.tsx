"use client";

import { useState } from "react";
import { parseAsString, parseAsStringEnum, useQueryState } from "nuqs";

export type QuizState = `instructions` | `instructions-2` | `quiz`;

export function useProficiencyQuiz() {
   const [state, setState] = useQueryState<QuizState>(
      `page`,
      parseAsStringEnum([`instructions`, `instructions-2`, `quiz`]).withDefault(
         `instructions`
      )
   );

   return { state, setState };
}
