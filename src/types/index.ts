export type WordListResponse = {
   id: string;
   words: string[];
   nonWords: string[];
   timesUsed: number;
   lastUsedAt: Date;
};

export interface DashboardStats {
   totalUsers: number;
   completedQuizzes: number;
   highScoreQuizzes: number;
   averageQuizTime: number;
   quizzesByWordList: {
      wordListId: number;
      totalQuizzes: number;
      highScoreQuizzes: number;
   }[];
}
export interface User {
   id: string;
   name: string | null;
   email: string;
   createdAt: string;
   quizAttempts: {
      id: number;
      score: number;
      createdAt: string;
   }[];
}

export interface Word {
   id: number;
   word: string;
   isNonWord: boolean;
}

export interface WordList {
   id: number;
   words: Word[];
   timesUsed: number;
   lastUsedAt: string | null;
   createdAt: string;
}

export interface QuizAttempt {
   id: number;
   score: number;
   createdAt: string;
   correctWords: number;
   incorrectWords: number;
   correctNonWords: number;
   incorrectNonWords: number;
   npxionTime: number;
   totalQuizDuration: number;
}

export interface UserProfile {
   name: string | null;
   email: string;
   createdAt: string;
   consent: { id: string; createdAt: string };
   accounts: { provider: string; type: string }[];
   demographicSurvey?: {
      nativeLanguage: string;
      otherNativeLanguage?: string;
      languageAcquisition: string;
      otherAcquisitionLanguage?: string;
      familyLanguage: string;
      otherFamilyLanguage?: string;
      gender: string;
      age: string;
      highestEducation: string;
      arabicDialect: string;
      nationality: string;
      otherNationality?: string;
      residence: string;
      otherResidence?: string;
      languages: string;
      kindergartenLanguage: string;
      otherKindergartenLanguage?: string;
      primaryLanguage: string;
      otherPrimaryLanguage?: string;
      middleLanguage: string;
      otherMiddleLanguage?: string;
      highSchoolLanguage: string;
      otherHighSchoolLanguage?: string;
      universityLanguage: string;
      university?: string;
      otherUniversityLanguage?: string;
      readingHours: string;
      listeningHours: string;
      writingHours: string;
      speakingHours: string;
      attentionDisorder: string;
      readingDisorder: string;
      vision: string;
      handedness: string;
   };
   quizAttempts: QuizAttempt[];
}

export interface QuizResponse {
   word: string;
   isCorrect: boolean;
   isNonWord: boolean;
   responseTime: number; // Time taken to respond
   isTimeout: boolean;
   responseType: "keyboard" | "buttons"; // Track how the user responded
   pageNumber: number; // Track which page (word number) this was
}

export interface DeviceInfo {
   deviceType: string;
   deviceOS: string;
   deviceBrowser: string;
   monitorSize: string;
   viewportSize: string;
}

export interface SurveyData {
   nativeLanguage: string;
   otherNativeLanguage?: string;

   languageAcquisition: string;
   otherAcquisitionLanguage?: string;

   familyLanguage: string;
   otherFamilyLanguage?: string;

   gender: string;
   age: string;

   age_of_acquiring_arabic: string;
   years_living_in_arabic_countries_years: string;
   years_living_in_arabic_countries_months: string;

   years_living_in_arabic_environments_years: string;
   years_living_in_arabic_environments_months: string;

   speaking_proficiency: string;
   listening_proficiency: string;
   reading_proficiency: string;
   writing_proficiency: string;

   highestEducation: string;
   arabicDialect: string;
   nationality: string;
   otherNationality?: string;
   currentUniversity?: string;
   residence: string;
   otherResidence?: string;
   languages: string;
   kindergartenLanguage: string;
   otherKindergartenLanguage?: string;
   primaryLanguage: string;
   otherPrimaryLanguage?: string;
   middleLanguage: string;
   otherMiddleLanguage?: string;
   highSchoolLanguage: string;
   otherHighSchoolLanguage?: string;
   universityLanguage: string;
   otherUniversityLanguage?: string;
   readingHours: string;
   listeningHours: string;
   writingHours: string;
   speakingHours: string;
   attentionDisorder: string;
   readingDisorder: string;
   vision: string;
   handedness: string;
}
