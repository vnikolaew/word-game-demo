"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface InstructionsProps {
  isMobile: boolean;
  setState: React.Dispatch<React.SetStateAction<string>>;
}

const Instructions = ({ isMobile, setState }: InstructionsProps) => {
  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center text-2xl">
          تعليمات الجلسة التدريبية
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-lg text-gray-500">
          {isMobile
            ? 'في هذا الاختبار، سترى 100 سلسة من الحروف\nالمطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقيةأنقر خانة"نعم" للكلمات الحقيقية وخانة"لا" للكلمات غير الحقيقية\nيرجى الاستجابة بأسرع وأدق ما يمكن'
            : "في هذا الاختبار، سترى 100 سلسة من الحروف\nالمطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقية\nاضغط السهم الأيمن للكلمات الحقيقية والسهم الأيسر للكلمات غير الحقيقية\nيرجى الاستجابة بأسرع وأدق ما يمكن"}
        </p>
        <div className="flex justify-center pt-4">
          <Button
            onClick={() => setState("practice")}
            className="w-full md:w-auto"
          >
            ابدأ التدريب
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Instructions;
