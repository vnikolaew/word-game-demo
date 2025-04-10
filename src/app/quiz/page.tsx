"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
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
    try {
      setLoading(true);
      setError(null);

      // Save consent to database or perform any other necessary actions

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
  const handleQuizComplete = (score: number) => {
    setQuizScore(score);
    setAppState("results");
  };

  // Handle survey completion
  const handleSurveyComplete = () => {
    router.push("/");
  };

  return (
    <div className="mx-auto py-12">
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
          {appState === "consent" && <ConsentView onConsent={handleConsent} />}
          {appState === "practice" && (
            <PracticeView onComplete={() => setAppState("quiz")} />
          )}
          {appState === "quiz" && <QuizView onComplete={handleQuizComplete} />}
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
  );
}
