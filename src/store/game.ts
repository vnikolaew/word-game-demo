import { atom } from "jotai";

// Types
export type GameStatus = "idle" | "playing" | "finished";
export type WordType = {
  word: string;
  isRealWord: boolean;
};
export type UserAnswer = {
  word: string;
  isRealWord: boolean;
  userGuess: boolean;
  isCorrect: boolean;
};

// Generate sample words (this would come from backend in production)
const generateWords = (): WordType[] => {
  const realWords = [
    // Common nouns
    "apple",
    "banana",
    "orange",
    "grape",
    "mango",
    "book",
    "computer",
    "phone",
    "table",
    "chair",
    "house",
    "car",
    "tree",
    "flower",
    "dog",
    "cat",
    "bird",
    "fish",
    "sun",
    "moon",
    // Verbs
    "run",
    "jump",
    "walk",
    "talk",
    "eat",
    "sleep",
    "write",
    "read",
    "sing",
    "dance",
    "play",
    "work",
    "study",
    "think",
    "laugh",
    "cry",
    "smile",
    "dream",
    "hope",
    "love",
    // Adjectives
    "happy",
    "sad",
    "big",
    "small",
    "hot",
    "cold",
    "fast",
    "slow",
    "good",
    "bad",
    "new",
    "old",
    "young",
    "rich",
    "poor",
    "strong",
    "weak",
    "bright",
    "dark",
    "sweet",
  ];

  const nonWords = [
    // Misspelled versions of real words
    "appel",
    "banena",
    "orenj",
    "graps",
    "manggo",
    "bouk",
    "komputer",
    "fone",
    "tabel",
    "chare",
    "hause",
    "kar",
    "tre",
    "flauer",
    "doog",
    "kat",
    "burd",
    "fich",
    "sunn",
    "mune",
    // Made-up words
    "flibber",
    "zoop",
    "cranth",
    "quixx",
    "vektor",
    "plith",
    "morgle",
    "snazzle",
    "braxen",
    "dorth",
    "yundle",
    "thwip",
    "krang",
    "vorx",
    "zilp",
    "menth",
    "gronk",
    "splith",
    "wrax",
    "quop",
    // Nonsense variations
    "happie",
    "sade",
    "bigge",
    "smoll",
    "hott",
    "kold",
    "fasst",
    "slo",
    "gud",
    "badd",
    "neew",
    "olde",
    "yung",
    "ritch",
    "pore",
    "stronk",
    "weeck",
    "brite",
    "derk",
    "swete",
  ];

  // Create array with real and non-real words
  const words: WordType[] = [
    ...realWords.map((word) => ({ word, isRealWord: true })),
    ...nonWords.map((word) => ({ word, isRealWord: false })),
  ];

  // Shuffle array
  const shuffled = words.sort(() => Math.random() - 0.5);

  // Ensure we have exactly 100 words by repeating the array if necessary
  const result: WordType[] = [];
  while (result.length < 100) {
    result.push(...shuffled);
  }

  return result.slice(0, 100);
};

// Atoms
export const gameStatusAtom = atom<GameStatus>("idle");
export const currentWordIndexAtom = atom<number>(0);
export const wordsAtom = atom<WordType[]>(generateWords());
export const userAnswersAtom = atom<UserAnswer[]>([]);
export const scoreAtom = atom<number>(0);
export const timerAtom = atom<number>(60); // 60 seconds per word

// Computed atoms
export const progressAtom = atom((get) => {
  const currentIndex = get(currentWordIndexAtom);
  return (currentIndex / 100) * 100;
});

export const accuracyAtom = atom((get) => {
  const answers = get(userAnswersAtom);
  if (answers.length === 0) return 0;
  const correctAnswers = answers.filter((answer) => answer.isCorrect);
  return (correctAnswers.length / answers.length) * 100;
});
