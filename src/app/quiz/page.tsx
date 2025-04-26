"use client";

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
import QuizLimitView from "@/components/view/QuizLimitView";
import { __IS_PROD__ } from "@/lib/consts";
import { useQuiz } from "./hooks";

export default function AppPage() {
   const router = useRouter();
   const {
      appState,
      error,
      handleConsent,
      handleQuizComplete,
      handleResultsComplete,
      handleRetake,
      handleSurveyComplete,
      loading,
      quizLimitInfo,
      setAppState,
   } = useQuiz();

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
