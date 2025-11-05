"use client";
import { Word } from "@/app/quiz/proficiency/words";

export function shuffleArray<T>(array: T[]): T[] {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
}

export function generateQuizPages(
   wordList: Word[],
   wordsPerPage: number = 15
): Word[][] {
   const realWords = shuffleArray(wordList.filter((word) => word.isReal));
   const nonWords = shuffleArray(wordList.filter((word) => !word.isReal));

   const pages: Word[][] = [];
   const numPages = Math.ceil(wordList.length / wordsPerPage);

   for (let i = 0; i < numPages; i++) {
      const pageRealWords = realWords.slice(i * 10, (i + 1) * 10);
      const pageNonWords = nonWords.slice(i * 5, (i + 1) * 5);

      let page = [...pageRealWords, ...pageNonWords];
      page = shuffleArray(page);

      for (let j = 1; j < page.length; j++) {
         if (!page[j - 1].isReal && !page[j].isReal) {
            const nextRealWordIndex = page.findIndex(
               (word, index) => index > j && word.isReal
            );
            if (nextRealWordIndex !== -1) {
               [page[j], page[nextRealWordIndex]] = [
                  page[nextRealWordIndex],
                  page[j],
               ];
            }
         }
      }

      pages.push(page);
   }

   return pages;
}

export function getWordFromStimulus(stimulus: string) {
   const doc = new DOMParser().parseFromString(stimulus, 'text/html');
   return doc?.body?.textContent?.trim();
}
