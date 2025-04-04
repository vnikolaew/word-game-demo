"use client";

import { useEffect, useCallback } from "react";
import { useAtom } from "jotai";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  gameStatusAtom,
  currentWordIndexAtom,
  wordsAtom,
  userAnswersAtom,
  scoreAtom,
  timerAtom,
  progressAtom,
  accuracyAtom,
} from "@/store/game";

export const WordGame = () => {
  // Atoms
  const [gameStatus, setGameStatus] = useAtom(gameStatusAtom);
  const [currentWordIndex, setCurrentWordIndex] = useAtom(currentWordIndexAtom);
  const [words] = useAtom(wordsAtom);
  const [, setUserAnswers] = useAtom(userAnswersAtom);
  const [score, setScore] = useAtom(scoreAtom);
  const [timer, setTimer] = useAtom(timerAtom);
  const [progress] = useAtom(progressAtom);
  const [accuracy] = useAtom(accuracyAtom);

  // Current word
  const currentWord = words[currentWordIndex];

  // Handle game start
  const handleStart = () => {
    setGameStatus("playing");
    setCurrentWordIndex(0);
    setUserAnswers([]);
    setScore(0);
    setTimer(60);
  };

  // Handle user answer
  const handleAnswer = useCallback(
    (isWordGuess: boolean) => {
      if (gameStatus !== "playing") return;

      const isCorrect = isWordGuess === currentWord.isRealWord;

      setUserAnswers((prev) => [
        ...prev,
        {
          word: currentWord.word,
          isRealWord: currentWord.isRealWord,
          userGuess: isWordGuess,
          isCorrect,
        },
      ]);

      if (isCorrect) {
        setScore((prev) => prev + 1);
      }

      if (currentWordIndex === 99) {
        setGameStatus("finished");
      } else {
        setCurrentWordIndex((prev) => prev + 1);
        setTimer(60);
      }
    },
    [
      currentWord,
      currentWordIndex,
      gameStatus,
      setCurrentWordIndex,
      setGameStatus,
      setScore,
      setTimer,
      setUserAnswers,
    ]
  );

  // Handle keyboard controls
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (gameStatus === "idle" && e.code === "Space") {
        handleStart();
      } else if (gameStatus === "playing") {
        if (e.code === "ArrowLeft") {
          handleAnswer(false); // Non-word
        } else if (e.code === "ArrowRight") {
          handleAnswer(true); // Word
        }
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameStatus, handleAnswer]);

  // Timer
  useEffect(() => {
    if (gameStatus !== "playing") return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          handleAnswer(false); // Time's up, count as wrong
          return 60;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [gameStatus, handleAnswer, setTimer]);

  // Render different game states
  const renderGameState = () => {
    switch (gameStatus) {
      case "idle":
        return (
          <div className="text-center">
            <h1 className="text-4xl font-bold mb-8">Word Game</h1>
            <p className="mb-4">Press SPACE or click the button to start</p>
            <p className="mb-8">
              Use LEFT arrow for non-words, RIGHT arrow for real words
            </p>
            <Button onClick={handleStart}>Start Game</Button>
          </div>
        );

      case "playing":
        return (
          <div className="text-center">
            <div className="mb-8">
              <Progress
                value={((60 - timer) / 60) * 100}
                className="w-full h-2"
              />
              <p className="mt-2">Time remaining: {timer}s</p>
            </div>
            <div className="mb-8">
              <p className="text-sm mb-2">Word {currentWordIndex + 1} of 100</p>
              <h2 className="text-6xl font-bold mb-4">{currentWord.word}</h2>
            </div>
            <div className="flex justify-center gap-4">
              <Button
                variant="destructive"
                onClick={() => handleAnswer(false)}
                className="w-32"
              >
                Non-word (←)
              </Button>
              <Button
                variant="default"
                onClick={() => handleAnswer(true)}
                className="w-32"
              >
                Word (→)
              </Button>
            </div>
            <div className="mt-4">
              <Progress value={progress} className="w-full h-2" />
              <p className="mt-2">Progress: {currentWordIndex}/100</p>
            </div>
          </div>
        );

      case "finished":
        return (
          <div className="text-center">
            <h2 className="text-4xl font-bold mb-8">Game Over!</h2>
            <div className="space-y-4 mb-8">
              <p className="text-xl">Final Score: {score}/100</p>
              <p className="text-xl">Accuracy: {accuracy.toFixed(1)}%</p>
            </div>
            <Button onClick={handleStart}>Play Again</Button>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">{renderGameState()}</div>
    </div>
  );
};
