import { useState, useCallback } from "react";

interface WordList {
  id: string;
  words: string[];
  nonWords: string[];
  timesUsed: number;
}

export function useWordList() {
  const [currentList, setCurrentList] = useState<WordList | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

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

  return {
    currentList,
    isLoading,
    error,
    getNewWordList,
    getUserWordLists,
  };
}
