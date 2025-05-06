"use client";
import { UserConsent } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import { __IS_PROD__ } from "@/lib/consts";
import { useRouter } from "next/navigation";

export type QuizLimitInfo = {
   message: string;
   tryAgainIn: number;
};

type AppState = "consent" | "practice" | "quiz" | `limit`;

export function useQuiz() {
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
         const [apiConsent, apiLimit] = await Promise.all([
            getConsent(),
            limitUserQuiz(),
         ]);

         if (apiConsent) {
            setConsent(apiConsent);
            setAppState("quiz");
         } else {
            setAppState("consent");
         }

         if (apiLimit) {
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
         setAppState("practice");
      } catch (error) {
         setError("حدث خطأ أثناء حفظ الموافقة");
         console.error("Consent error:", error);
      } finally {
         setLoading(false);
      }
   }, [consent?.consentVersion]);

   // Handle quiz completion
   const handleQuizComplete = async () => {
      try {
         const response = await fetch("/api/survey");
         if (!response.ok) router.push(`/quiz/survey`);

         const survey = await response.json();
         router.push(survey ? `/quiz/result` : `/quiz/survey`);
      } catch (error) {
         router.push(`/quiz/survey`);
      }
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
