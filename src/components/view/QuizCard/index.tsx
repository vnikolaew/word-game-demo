import React from "react";

// Components
import { Card, CardFooter } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";

interface QuizCardProps {
  progress: number;
  showWord: boolean;
  currentWord: string;
  showFeedback: boolean;
  isCorrect: boolean;
  isMobile: boolean;
  handleResponse: (response: boolean) => void;
  isActuallyCorrect: boolean | null;
}

const QuizCard = ({
  progress,
  showWord,
  currentWord,
  showFeedback,
  isCorrect,
  isMobile,
  handleResponse,
  isActuallyCorrect,
}: QuizCardProps) => {
  return (
    <Card className="w-full p-6">
      <div className="text-center">
        <Progress value={progress} className="mb-6" />
        <div className="flex flex-col justify-center items-center h-[400px] gap-y-2 relative">
          {showWord && <h2 className="text-3xl font-bold">{currentWord}</h2>}
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

        {isMobile && (
          <div className="flex justify-center gap-4">
            <Button
              variant="default"
              onClick={() => handleResponse(true)}
              className="w-full md:w-32 h-12 text-lg"
            >
              نعم
            </Button>
            <Button
              variant="destructive"
              onClick={() => handleResponse(false)}
              className="w-full md:w-32 h-12 text-lg text-white"
            >
              لا
            </Button>
          </div>
        )}
      </div>

      {process.env.NODE_ENV === "development" && (
        <CardFooter className="flex gap-y-2 justify-between border border-gray-200 p-3 rounded-lg">
          <p>Current Word: {currentWord}</p>
          <p>Is Correct: {isActuallyCorrect ? "Correct" : "Incorrect"}</p>
          <p>Show Feedback: {showFeedback ? "Yes" : "No"}</p>
          <p>Progress: {progress}</p>
        </CardFooter>
      )}
    </Card>
  );
};

export default QuizCard;
