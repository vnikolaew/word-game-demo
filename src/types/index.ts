export type WordListResponse = {
  id: string;
  words: string[];
  nonWords: string[];
  timesUsed: number;
  lastUsedAt: Date;
};
