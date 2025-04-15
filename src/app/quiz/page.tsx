"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

// components
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Spinner } from "@/components/ui/Spinner";

// views
import { ConsentView } from "@/components/view/ConsentView";
import { PracticeView } from "@/components/view/PracticeView";
import QuizView from "@/components/view/QuizView";
import { ResultsView } from "@/components/view/ResultsView";
import { SurveyView } from "@/components/view/SurveyView";

// types
import { UserConsent } from "@prisma/client";

type AppState = "consent" | "practice" | "quiz" | "results" | "survey";

export default function AppPage() {
  const router = useRouter();

  // Global state

  const [consent, setConsent] = useState<UserConsent | null>(null);
  const [appState, setAppState] = useState<AppState>("consent");
  const [loading, setLoading] = useState(false);
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

  useEffect(() => {
    getConsent().then((data) => {
      if (data) {
        setConsent(data);
        setAppState("quiz");
      } else {
        setError("حدث خطأ أثناء جلب الموافقة");
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
  const handleQuizComplete = async () => {
    if (consent) {
      setAppState("results");
    } else {
      setAppState("survey");
    }
  };

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
