"use client";
import { DemographicSurvey, UserConsent } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import { __IS_PROD__ } from "@/lib/consts";
import { useRouter } from "next/navigation";

export type QuizLimitInfo = {
   message: string;
   tryAgainIn: number;
};

type AppState =
   | "consent"
   | "proficiency"
   | "proficiency-limit"
   | "practice"
   | "quiz"
   | `limit`;

export function useQuiz(survey?: DemographicSurvey | null) {
   const [consent, setConsent] = useState<UserConsent | null>(null);
   const router = useRouter();

   const [appState, setAppState] = useState<AppState>("quiz");
   const [quizLimitInfo, setQuizLimitInfo] = useState<QuizLimitInfo>(null!);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   const getConsent = async () => {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/consent");
      const data = await response.json();
      setLoading(false);
      return data;
   };

   const getProficiencyTestInfo = async () => {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/quiz/proficiency");
      const data = await response.json();
      setLoading(false);
      return data;
   };

   const limitUserQuiz = async () => {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/quiz/limit");
      const data = await response.json();
      setLoading(false);
      return data;
   };

   useEffect(() => {
      (async () => {
         const [apiConsent, apiLimit, proficiencyTestInfo] = await Promise.all([
            getConsent(),
            limitUserQuiz(),
            getProficiencyTestInfo(),
         ]);

         const { hasFinishedProficiencyTest, proficiencyQuizFinishedAt } =
            proficiencyTestInfo;

         const now = Date.now();
         const proficiencyFinishedDate = Date.parse(proficiencyQuizFinishedAt);

         const ONE_DAY_MS = 1000 * 60 * 60 * 24;
         const ONE_HOUR_MS = 1000 * 60 * 60;

         const hasFinishedMoreThanDayAgo =
            now - proficiencyFinishedDate >= ONE_DAY_MS;

         if (apiConsent) {
            setConsent(apiConsent);

            console.log({
               now,
               proficiencyFinishedDate,
               hasFinishedMoreThanDayAgo,
               hasFinishedProficiencyTest,
            });

            if (Boolean(hasFinishedProficiencyTest)) {
               if (hasFinishedMoreThanDayAgo) {
                  setAppState("quiz");
               } else {
                  const tryAgainIn = Math.floor(
                     Math.abs(ONE_DAY_MS - (now - proficiencyFinishedDate)) /
                        ONE_HOUR_MS
                  );

                  setQuizLimitInfo({
                     message: `شكرًا لك. ستتمكن من إجراء الاختبار بعد {hours} ساعة من الآن.`,
                     tryAgainIn,
                  });
                  setAppState("proficiency-limit");
               }
            } else {
               setAppState("proficiency");
            }
         } else {
            setAppState("consent");
         }

         if (apiLimit && hasFinishedMoreThanDayAgo) {
            setQuizLimitInfo({
               message: apiLimit.message,
               tryAgainIn: apiLimit.tryAgainIn,
            });
            if (apiLimit.success === false && __IS_PROD__) setAppState(`limit`);
         }
      })();
   }, []);

   // Handle consent submission
   const handleConsent = useCallback(async () => {
      try {
         setLoading(true);
         setError(null);

         const newVersion = `${Number(consent?.consentVersion?.split(`.`)?.at(0) ?? 0) + 1}.0`;

         // Save consent to database or perform any other necessary actions
         await fetch("/api/consent", {
            method: "POST",
            body: JSON.stringify({
               consentVersion: newVersion,
            }),
         });

         // Move to practice state
         setAppState("proficiency");
      } catch (error) {
         setError("حدث خطأ أثناء حفظ الموافقة");
         console.error("Consent error:", error);
      } finally {
         setLoading(false);
      }
   }, [consent?.consentVersion]);

   // Handle quiz completion
   const handleQuizComplete = async () => {
      router.push(survey ? `/quiz/result` : `/quiz/survey`);
   };

   return {
      handleConsent,
      handleQuizComplete,
      loading,
      error,
      appState,
      setAppState,
      quizLimitInfo,
   };
}
