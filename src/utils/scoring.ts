"use client";

interface QuizResponse {
   answer: number; // 1 for selected, 0 for not selected
   wordType: "word" | "nonword";
}

export function calculateGhentScore(responses: QuizResponse[]): number {
   return responses.reduce((score, response) => {
      if (response.answer === 1) {
         return response.wordType === "word" ? score + 1 : score - 2;
      }
      return score;
   }, 0);
}

export function calculateNormalizedGhentScore(
   responses: QuizResponse[]
): number {
   const ghentScore = calculateGhentScore(responses);
   const totalWordItems = responses.filter((r) => r.wordType === "word").length;
   return (ghentScore / totalWordItems) * 100;
}
