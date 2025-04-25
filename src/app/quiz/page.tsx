"use client";

import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";

// views
import { ConsentView } from "@/components/view/ConsentView";
import { PracticeView } from "@/components/view/PracticeView";
import QuizView from "@/components/view/QuizView";
import ResultsView from "@/components/view/ResultsView";
import { SurveyView } from "@/components/view/SurveyView";

// types
import { UserConsent } from "@prisma/client";
import QuizLimitView from "@/components/view/QuizLimitView";
import { __IS_PROD__ } from "@/lib/consts";

type AppState =
   | "consent"
   | "practice"
   | "quiz"
   | "results"
   | "survey"
   | `limit`;

export type QuizLimitInfo = {
   message: string;
   tryAgainIn: number;
};

export default function AppPage() {
   const router = useRouter();

   // Global state
   const [consent, setConsent] = useState<UserConsent | null>(null);
   const [survey, setSurvey] = useState<any | null>(null);

   const [appState, setAppState] = useState<AppState>("quiz");
   const [quizLimitInfo, setQuizLimitInfo] = useState<QuizLimitInfo>(null!);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   // Get consent from database
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
      if (consent && !!survey) {
         setAppState("results");
      } else {
         setAppState("survey");
      }
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

   return (
      <div className="mx-auto py-12">
         {loading ? (
            <div className="flex items-center justify-center min-h-[50vh]">
               <Spinner size="sm" />
            </div>
         ) : error ? (
            <Card>
               <CardContent className="text-center py-6">
                  <div className="text-red-600 mb-4">{error}</div>
                  <Button onClick={() => router.push("/")}>
                     العودة إلى المنزل
                  </Button>
               </CardContent>
            </Card>
         ) : (
            <>
               {appState === "consent" && (
                  <ConsentView onConsent={handleConsent} />
               )}
               {appState === "practice" && (
                  <PracticeView onComplete={() => setAppState("quiz")} />
               )}
               {appState === "quiz" && (
                  <QuizView onComplete={handleQuizComplete} />
               )}
               {appState === "limit" && (
                  <QuizLimitView limitInfo={quizLimitInfo} />
               )}
               {appState === "results" && (
                  <ResultsView
                     onNext={handleResultsComplete}
                     onRetake={handleRetake}
                  />
               )}
               {appState === "survey" && (
                  <SurveyView onComplete={handleSurveyComplete} />
               )}
            </>
         )}
      </div>
   );
}
