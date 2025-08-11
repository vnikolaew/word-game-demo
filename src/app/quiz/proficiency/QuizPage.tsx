"use client";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React, { useEffect, useMemo, useState } from "react";
import { Word, wordList } from "./words";
import ProgressBar from "@/components/ProgressBar";
import { ShortTestInstructions } from "@/components/ShortTestInstructions";
import { calculateNormalizedGhentScore } from "@/utils/scoring";
import { generateQuizPages } from "@/utils/quizUtils";
import { Tajawal } from "next/font/google";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { saveProficiencyTestScore } from "./actions";

const tajawal = Tajawal({
   variable: "--font-arabic",
   weight: "300",
   subsets: ["arabic"],
   display: "swap",
});

interface SelectedWords {
   [key: number]: boolean;
}

type QuizResponse = {
   answer: number;
   wordType: "word" | "nonword";
};

function QuizPage() {
   const router = useRouter();
   const [currentPage, setCurrentPage] = useState<number>(1);
   const [selectedWords, setSelectedWords] = useState<SelectedWords>({});
   const [quizStartTime, setQuizStartTime] = useState<number | null>(null);
   const [quizPages, setQuizPages] = useState<Word[][]>([]);
   const wordsPerPage = 15;

   useEffect(() => {
      setQuizStartTime(Date.now());
      setQuizPages(generateQuizPages(wordList, wordsPerPage));
   }, []);

   const totalPages = useMemo(() => quizPages.length, [quizPages.length]);
   const currentWords = useMemo(
      () => quizPages[currentPage - 1] || [],
      [currentPage, quizPages]
   );

   const handleWordSelect = (wordId: number) => {
      setSelectedWords((prev) => ({
         ...prev,
         [wordId]: !prev[wordId],
      }));
   };

   const handleNextPage = async () => {
      if (currentPage < totalPages) {
         setCurrentPage((prev) => prev + 1);
      } else {
         // Quiz completed, calculate score and store result
         const score = calculateScore();
         const timeTaken = quizStartTime
            ? (Date.now() - quizStartTime) / 1000
            : 0;

         // Store result in localStorage
         localStorage.setItem(
            "quizResult",
            JSON.stringify({ score, timeTaken })
         );

         const { success } = await saveProficiencyTestScore(score);

         if (success) {
            toast(`اختبار منتهي`, {
               description: "تم حفظ النتائج. سيتم توجيهك إلى صفحة النتائج.",
            });

            // Navigate to results page
            router.push("/quiz/proficiency/result");
         } else {
            toast(`حدث خطأ أثناء إرسال نتيجة اختبار الكفاءة`, {
               description: `من فضلك حاول تشغيل الاختبار مرة أخرى.`,
            });
         }
      }
   };

   const handlePreviousPage = () => {
      if (currentPage > 1) {
         setCurrentPage((prev) => prev - 1);
      }
   };

   const calculateScore = (): number => {
      const responses: QuizResponse[] = wordList.map((word) => ({
         answer: selectedWords[word.id] ? 1 : 0,
         wordType: word.isReal ? "word" : "nonword",
      }));

      return calculateNormalizedGhentScore(responses);
   };

   return (
      <div className="max-w-4xl mx-auto p-4">
         <ProgressBar currentPage={currentPage - 1} totalPages={totalPages} />
         <h1 className="text-3xl font-bold mb-8 text-center">
            ARABIC VOCABULARY TEST
            <br/>
            اختبار المفردات العربية
         </h1>
         <ShortTestInstructions />
         <div className={cn("space-y-4", tajawal.className)}>
            {currentWords.map((word: Word) => (
               <div
                  key={word.id}
                  className="flex items-center space-x-reverse space-x-4"
               >
                  <Checkbox
                     id={`word-${word.id}`}
                     checked={selectedWords[word.id] || false}
                     onCheckedChange={() => handleWordSelect(word.id)}
                     className="w-4 h-4 ml-2"
                  />
                  <label
                     htmlFor={`word-${word.id}`}
                     className="text-lg cursor-pointer"
                  >
                     {word.word}
                  </label>
               </div>
            ))}
         </div>
         <div className="flex justify-between mt-12">
            <Button
               onClick={handlePreviousPage}
               disabled={currentPage === 1}
               className="text-lg py-2 px-12"
            >
               السابق
            </Button>
            <Button onClick={handleNextPage} className="text-lg py-2 px-12">
               {currentPage < totalPages ? "التالي" : "إنهاء الاختبار"}
            </Button>
         </div>
      </div>
   );
}

export default QuizPage;
