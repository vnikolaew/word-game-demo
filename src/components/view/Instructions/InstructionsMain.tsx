"use client";

import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import React, { useMemo } from "react";
import { AppState } from "../PracticeView";

interface InstructionsProps {
   isMobile: boolean;
   practice?: boolean;
   setState: React.Dispatch<React.SetStateAction<AppState>>;
}

function InstructionsMain({ isMobile, setState, practice }: InstructionsProps) {
   const text = useMemo(
      () =>
         isMobile
            ? `في هذا الاختبار، سترى  10 سلاسل من الحروف\nالمطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقية\nاضغط خانة "نعم" للكلمات الحقيقية وخانة "لا" للكلمات غير الحقيقية\nيرجى الاستجابة بأسرع وأدق ما يمكن`
            : `في هذا الاختبار، سترى  10 سلاسل من الحروف\nالمطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقية\nاضغط السهم الأيمن للكلمات الحقيقية والسهم الأيسر للكلمات غير الحقيقية\nيرجى الاستجابة بأسرع وأدق ما يمكن`,
      [isMobile]
   );

   return (
      <Card className="w-full max-w-2xl mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-2xl">
               {practice
                  ? `تعليمات الجلسة التدريبية`
                  : `تعليمات الجلسة الرئيسية`}
            </CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
            <p
               dangerouslySetInnerHTML={{
                  __html: text.replaceAll(`\n`, `<br /> <br />`),
               }}
               className="text-lg text-gray-500"
            />
            <div className="flex justify-center pt-4">
               <Button
                  onClick={() => setState("practice")}
                  className="w-full md:w-auto !px-12"
               >
                  ابدأ التدريب
               </Button>
            </div>
         </CardContent>
      </Card>
   );
}

export default InstructionsMain;
