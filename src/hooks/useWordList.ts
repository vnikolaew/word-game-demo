import { useState, useCallback } from "react";

interface WordList {
  id: string;
  words: string[];
  nonWords: string[];
  timesUsed: number;
  lastUsedAt: Date;
  attemptsRemaining?: number;
}

interface QuizAttempt {
  id: number;
  score: number;
  createdAt: string;
  correctWords: number;
  incorrectWords: number;
  correctNonWords: number;
  incorrectNonWords: number;
  npxionTime: number;
  totalQuizDuration: number;
  wordList: {
    id: number;
    name: string;
  };
}

interface UserProfile {
  name: string | null;
  email: string;
  demographicSurvey?: {
    age: string;
    gender: string;
    educationLevel: string;
    nativeLanguage: string;
    otherLanguages: string[];
    arabicProficiency?: string;
    yearsLearningArabic?: string;
  };
  quizAttempts: QuizAttempt[];
}

export function useWordList() {
  const [currentList, setCurrentList] = useState<WordList | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [profile, setProfile] = useState<UserProfile | null>(null);

  const getNewWordList = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch("/api/wordlists");
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Failed to fetch word list");
      }
      const data = await response.json();
      setCurrentList(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getUserWordLists = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/wordlists/user");
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.error || "Failed to fetch user word lists");
      }
      const data = await response.json();
      return data as WordList[];
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      return [];
    } finally {
      setIsLoading(false);
    }
  }, []);

  const getUserProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/profile");
      if (!response.ok) {
        throw new Error("Failed to fetch profile");
      }
      const data = await response.json();
      setProfile(data);
      return data;
    } catch (err) {
      setError(err instanceof Error ? err.message : "An error occurred");
      return null;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const deleteUserProfile = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);
      const response = await fetch("/api/profile", {
        method: "DELETE",
      });
      if (!response.ok) throw new Error("Failed to delete account");
      return true;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to delete account");
      return false;
    } finally {
      setIsLoading(false);
    }
  }, []);

  return {
    currentList,
    isLoading,
    error,
    profile,
    getNewWordList,
    getUserWordLists,
    getUserProfile,
    deleteUserProfile,
  };
}
