import React, { useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Noto_Sans_Arabic } from "next/font/google";

// Components
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Assets
import { Check, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

const notoSans = Noto_Sans_Arabic({
   variable: "--font-arabic",
   weight: "400",
   subsets: ["arabic"],
   display: "swap",
});

interface QuizCardProps {
   progress: number;
   showWord: boolean;
   currentWord: string;
   showFeedback: boolean;
   isCorrect: boolean;
   isMobile: boolean;
   handleResponse: (
      isRealWord: boolean,
      isTimeout?: boolean,
      responseType?: "keyboard" | "buttons"
   ) => void;
}

const QuizCard = ({
   progress,
   showWord,
   currentWord,
   showFeedback,
   isCorrect,
   isMobile,
   handleResponse,
}: QuizCardProps) => {
   const handleWord = useCallback(() => {
      handleResponse(true, false, "buttons");
   }, [handleResponse]);

   const handleNonWord = useCallback(() => {
      handleResponse(false, false, "buttons");
   }, [handleResponse]);

   return (
      <Card className={cn("w-full p-6", notoSans.className)}>
         <div className="text-center">
            <Progress value={progress} className="mb-6" />
            <div className="flex flex-col justify-center items-center h-[400px] gap-y-2 relative">
               {showWord && (
                  <h2 className="text-3xl font-bold">{currentWord}</h2>
               )}
               {showFeedback && (
                  <div className="flex items-center mt-32 justify-center">
                     {isCorrect ? (
                        <Check className="w-10 h-10 text-green-600" />
                     ) : (
                        <X className="w-10 h-10 text-red-600" />
                     )}
                  </div>
               )}
            </div>

            {isMobile ? (
               <div className="flex justify-center gap-4">
                  <Button
                     variant="default"
                     onClick={handleWord}
                     className="w-full md:w-32 h-12 text-lg bg-green-500"
                  >
                     نعم
                  </Button>
                  <Button
                     variant="destructive"
                     onClick={handleNonWord}
                     className="w-full md:w-32 h-12 text-lg text-white bg-red-500"
                  >
                     لا
                  </Button>
               </div>
            ) : (
               <span />
            )}
         </div>
      </Card>
   );
};

export default QuizCard;
