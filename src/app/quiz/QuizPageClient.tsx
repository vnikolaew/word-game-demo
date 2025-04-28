"use client";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";
import { match } from "ts-pattern";

// views
import { ConsentView } from "@/components/view/ConsentView";
import { PracticeView } from "@/components/view/PracticeView";
import QuizView from "@/components/view/QuizView";

// types
import QuizLimitView from "@/components/view/QuizLimitView";
import { __IS_PROD__ } from "@/lib/consts";
import { useQuiz } from "./hooks";
import Link from "next/link";
import { DemographicSurvey } from "@prisma/client";

interface Props {
   survey?: DemographicSurvey | null;
}

export default function AppPage({ survey }: Props) {
   const {
      appState,
      error,
      handleConsent,
      handleQuizComplete,
      loading,
      quizLimitInfo,
      setAppState,
   } = useQuiz(survey);

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
                  <Link href={`/`}>
                     <Button>العودة إلى المنزل</Button>
                  </Link>
               </CardContent>
            </Card>
         ) : (
            match(appState)
               .with(`consent`, (_) => (
                  <ConsentView onConsent={handleConsent} />
               ))
               .with(`practice`, (_) => (
                  <PracticeView onComplete={() => setAppState(`quiz`)} />
               ))
               .with(`quiz`, (_) => (
                  <QuizView onComplete={handleQuizComplete} />
               ))
               .with(`limit`, (_) => (
                  <QuizLimitView limitInfo={quizLimitInfo} />
               ))
               .otherwise((_) => null)
         )}
      </div>
   );
}
