"use client";

import {Button} from "@/components/ui/button";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {useMemo} from "react";
import {AppState} from "../PracticeView";

interface InstructionsProps {
   isMobile: boolean;
   practice?: boolean;
   setState: React.Dispatch<React.SetStateAction<AppState>>;
}

const Instructions = ({
                         isMobile,
                         practice = false,
                         setState,
                      }: InstructionsProps) => {

   const text = useMemo(() => {
      if (practice) {
         return isMobile
             ? `في هذا الاختبار، سترى  10 سلاسل من الحروف\nالمطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقية\nاضغط خانة "نعم" للكلمات الحقيقية وخانة "لا" للكلمات غير الحقيقية\nيرجى الاستجابة بأسرع وأدق ما يمكن`
             : `في هذا الاختبار، سترى 10 سلاسل من الحروف المطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقية اضغط السهم الأيمن للكلمات الحقيقية والسهم الأيسر للكلمات غير الحقيقية يرجى الاستجابة بأسرع وأدق ما يمكن`
      } else {
         return isMobile
             ? `في هذا الاختبار، سترى  100 سلاسل من الحروف\nالمطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقية أنقر خانة "نعم" للكلمات الحقيقية وخانة "لا" للكلمات غير الحقيقية\nيرجى الاستجابة بأسرع وأدق ما يمكن`
             : `في هذا الاختبار، سترى 100 سلسة من الحروف المطلوب منك أن تحكم ما إذا كانت سلسة الحروف هي كلمة عربية فصيحة حقيقية أم كلمة غير حقيقية اضغط السهم الأيمن للكلمات الحقيقية والسهم الأيسر للكلمات غير الحقيقية يرجى الاستجابة بأسرع وأدق ما يمكن
`;
      }
   }, [isMobile, practice]);

   const textEn = useMemo(() => {
      if (practice) {
         return isMobile
             ? `In this task, you will see 10 letter strings. You are required to judge whether the letter string is a real Modern Standard Arabic word or a nonword. Click on the "Yes" button for real words and the "No" button for  nonwords. Please respond as quickly and accurately as possible.`
             : `In this task, you will see 10 letter strings. You are required to judge whether the letter string is a real Modern Standard Arabic word or a nonword. Press the right arrow for real words and the left arrow for  nonwords. Please respond as quickly and accurately as possible.`
      } else {
         return isMobile
             ? `In this task, you will see 100 letter strings. You are required to judge whether the letter string is a real Modern Standard Arabic word or a nonword. Click on the "Yes" button for real words and the "No" button for  nonwords. Please respond as quickly and accurately as possible.`
             : `In this task, you will see 100 letter strings. You are required to judge whether the letter string is a real Modern Standard Arabic word or a nonword. Press the right arrow for real words and the left arrow for nonwords. Please respond as quickly and accurately as possible.`;
      }
   }, [isMobile, practice]);

   return (
       <Card className="w-full max-w-2xl mx-auto">
          <CardHeader>
             <CardTitle className="text-center text-2xl">
                {practice ? `PRACTICE SESSION INSTRUCTIONS` : `MAIN SESSION INSTRUCTIONS`}
                <br/>
                {practice
                    ? `تعليمات الجلسة التدريبية`
                    : `تعليمات الجلسة الرئيسية`}
             </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
             <p dir={`ltr`}
                dangerouslySetInnerHTML={{
                   __html: textEn
                }}
                className="text-lg text-gray-500"
             />
             <p
                 dangerouslySetInnerHTML={{
                    __html: text
                 }}
                 className="text-lg text-gray-500"
             />
             <div className="flex justify-center pt-4">
                <Button
                    onClick={() => setState("practice")}
                    className="w-full md:w-auto !px-12"
                >
                   {practice ? `ابدأ التدريب` : `ابدأ الاختبار`}
                </Button>
             </div>
          </CardContent>
       </Card>
   );
};

export default Instructions;
