"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useWordList } from "@/hooks/useWordList";
import { Loader2 } from "lucide-react";

interface QuizResponse {
  word: string;
  isCorrect: boolean;
  isNonWord: boolean;
}

export default function QuizView() {
  const router = useRouter();
  const { currentList, isLoading, error, getNewWordList } = useWordList();
  const [responses, setResponses] = useState<QuizResponse[]>([]);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [shuffledWords, setShuffledWords] = useState<string[]>([]);
  const [quizComplete, setQuizComplete] = useState(false);

  useEffect(() => {
    loadWordList();
  }, []);

  useEffect(() => {
    if (currentList) {
      // Combine and shuffle words and non-words
      const allWords = [...currentList.words, ...currentList.nonWords];
      setShuffledWords(shuffleArray(allWords));
    }
  }, [currentList]);

  const loadWordList = async () => {
    await getNewWordList();
  };

  const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const handleResponse = (isRealWord: boolean) => {
    if (!currentList || !shuffledWords[currentWordIndex]) return;

    const currentWord = shuffledWords[currentWordIndex];
    const isNonWord = currentList.nonWords.includes(currentWord);
    const isCorrect = isRealWord !== isNonWord;

    const response: QuizResponse = {
      word: currentWord,
      isCorrect,
      isNonWord,
    };

    setResponses([...responses, response]);

    if (currentWordIndex < shuffledWords.length - 1) {
      setCurrentWordIndex(currentWordIndex + 1);
    } else {
      setQuizComplete(true);
      // Save results and navigate to results page
      const results = {
        wordList: currentList,
        responses,
        completionTime: new Date().getTime(), // You might want to track actual completion time
      };
      // Save results to local storage or state management
      localStorage.setItem("quizResults", JSON.stringify(results));
      router.push("/results");
    }
  };

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <p className="text-red-500 mb-4">{error}</p>
        <Button onClick={loadWordList}>Try Again</Button>
      </div>
    );
  }

  if (isLoading || !currentList || !shuffledWords.length) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader2 className="h-8 w-8 animate-spin" />
      </div>
    );
  }

  const currentWord = shuffledWords[currentWordIndex];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <Card className="w-full max-w-lg p-6">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">
            Word {currentWordIndex + 1} of {shuffledWords.length}
          </p>
          <h2 className="text-3xl font-bold mb-8">{currentWord}</h2>
          <div className="flex justify-center gap-4">
            <Button
              variant="outline"
              onClick={() => handleResponse(true)}
              className="w-32"
            >
              Real Word
            </Button>
            <Button
              variant="outline"
              onClick={() => handleResponse(false)}
              className="w-32"
            >
              Non-Word
            </Button>
          </div>
        </div>
      </Card>
    </div>
  );
}
