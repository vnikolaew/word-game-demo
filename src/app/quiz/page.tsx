"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import RootLayout from "@/components/layout/RootLayout";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Progress } from "@/components/ui/progress";
import { Spinner } from "@/components/ui/Spinner";

// views
import { ConsentView } from "@/components/view/ConsentView";
import { PracticeView } from "@/components/view/PracticeView";
import QuizView from "@/components/view/QuizView";
import { ResultsView } from "@/components/view/ResultsView";
import { SurveyView } from "@/components/view/SurveyView";

type AppState = "consent" | "practice" | "quiz" | "results" | "survey";

export default function AppPage() {
  const router = useRouter();

  // Global state
  const [appState, setAppState] = useState<AppState>("consent");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [quizScore, setQuizScore] = useState<number>(0);

  // Handle consent submission
  const handleConsent = async () => {
    setLoading(true);
    setError(null);
  };

  // Handle quiz completion
  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setAppState("results");
  };

  // Handle survey completion
  const handleSurveyComplete = () => {
    router.push("/");
  };

  return (
    <RootLayout>
      <div className="container max-w-4xl mx-auto py-12">
        {loading ? (
          <div className="flex items-center justify-center min-h-[50vh]">
            <Spinner size="lg" />
          </div>
        ) : error ? (
          <Card>
            <CardContent className="text-center py-6">
              <div className="text-red-600 mb-4">{error}</div>
              <Button onClick={() => router.push("/")}>Return Home</Button>
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
            {appState === "results" && (
              <ResultsView
                score={quizScore}
                onNext={() => setAppState("survey")}
              />
            )}
            {appState === "survey" && (
              <SurveyView onComplete={handleSurveyComplete} />
            )}
          </>
        )}
      </div>
    </RootLayout>
  );
}
