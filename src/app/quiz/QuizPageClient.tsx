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
import { useRouter } from "next/navigation";
import ProficiencyTestLimitView from "@/components/view/ProficiencyTestLimitView";
import { WordListResponse } from "@/types";

interface Props {
   shuffledWords: string[]
   list: WordListResponse & {
      id: number
      attemptsRemaining: number
   }
}

export default function AppPage({ list, shuffledWords }: Props) {
   const {
      appState,
      error,
      handleConsent,
      handleQuizComplete,
      loading,
      quizLimitInfo,
      setAppState,
   } = useQuiz();
   const router = useRouter();

   if (appState === `proficiency`) router.push(`/quiz/proficiency`);

   return (
       <div className="mx-auto py-12">
          {loading ? (
              <div className="flex items-center justify-center min-h-[50vh]">
                 <Spinner size="sm"/>
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
                      <ConsentView onConsent={handleConsent}/>
                  ))
                  .with(`practice`, (_) => (
                      <PracticeView
                          onComplete={() => {
                             setAppState(`quiz`);
                          }}
                      />
                  ))
                  .with(`quiz`, (_) => (
                      <QuizView
                          shuffledWords={shuffledWords}
                          list={list}
                          onComplete={handleQuizComplete}/>
                  ))
                  .with(`limit`, (_) => (
                      <QuizLimitView limitInfo={quizLimitInfo}/>
                  ))
                  .with(`proficiency-limit`, (_) => (
                      <ProficiencyTestLimitView
                          limitInfo={
                              quizLimitInfo ?? { message: ``, tryAgainIn: 10 }
                          }
                      />
                  ))
                  .otherwise((_) => null)
          )}
       </div>
   );
}
