import { UserConsent } from "@prisma/client";
import { useCallback, useEffect, useState } from "react";
import { QuizLimitInfo } from "../page";
import { __IS_PROD__ } from "@/lib/consts";
import router from "next/router";

type AppState =
   | "consent"
   | "practice"
   | "quiz"
   | "results"
   | "survey"
   | `limit`;

export function useQuiz() {
   const [consent, setConsent] = useState<UserConsent | null>(null);
   const [survey, setSurvey] = useState<any | null>(null);

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

   const getSurvey = async () => {
      setLoading(true);
      setError(null);
      const response = await fetch("/api/survey");
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
      getConsent().then((data) => {
         if (data) {
            setConsent(data);
            setAppState("quiz");
         } else {
            setAppState("consent");
         }
      });

      getSurvey().then((data) => setSurvey(data));
      limitUserQuiz().then((data) => {
         if (data) {
            setQuizLimitInfo({
               message: data.message,
               tryAgainIn: data.tryAgainIn,
            });
            if (data.success === false && __IS_PROD__) setAppState(`limit`);
         }
      });
   }, []);

   // Handle consent submission
   const handleConsent = async () => {
      try {
         setLoading(true);
         setError(null);

         // Save consent to database or perform any other necessary actions
         await fetch("/api/consent", {
            method: "POST",
            body: JSON.stringify({ consentVersion: "1.0" }),
         });

         // Move to practice state
         setAppState("practice");
      } catch (error) {
         setError("حدث خطأ أثناء حفظ الموافقة");
         console.error("Consent error:", error);
      } finally {
         setLoading(false);
      }
   };

   // Handle quiz completion
   const handleQuizComplete = useCallback(async () => {
      console.log({ consent, survey });
      const skipSurvey = consent && survey;
      setAppState(skipSurvey ? `results` : `survey`);
   }, [consent, survey]);

   const handleResultsComplete = () => {
      router.push("/");
   };

   const handleRetake = () => {
      setAppState("quiz");
   };

   // Handle survey completion
   const handleSurveyComplete = () => {
      setAppState("results");
   };

   return {
      handleConsent,
      handleSurveyComplete,
      handleResultsComplete,
      handleRetake,
      handleQuizComplete,
      loading,
      error,
      appState,
      setAppState,
      quizLimitInfo,
   };
}
