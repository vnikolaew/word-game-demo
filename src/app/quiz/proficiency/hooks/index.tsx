"use client";

import { useState } from "react";

export type QuizState = `instructions` | `instructions-2` | `quiz`;

export function useProficiencyQuiz() {
   const [state, setState] = useState<QuizState>(`instructions`);
   return { state, setState };
}
