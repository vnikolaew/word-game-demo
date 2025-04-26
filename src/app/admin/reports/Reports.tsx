"use client";
import { Button } from "@/components/ui/button";
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from "@/components/ui/card";
import { FileDown } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";

function Reports() {
   const [surveyLoading, setSurveyLoading] = useState(false);
   const [quizLoading, setQuizLoading] = useState(false);

   const handleExport = async (type: "quiz" | "survey") => {
      try {
         if (type === `quiz`) {
            setQuizLoading(true);
            setSurveyLoading(false);
         } else {
            setQuizLoading(false);
            setSurveyLoading(true);
         }

         const response = await fetch(`/api/admin/reports/${type}`);
         if (!response.ok) throw new Error(`فشل في تصدير بيانات ${type}`);

         const blob = await response.blob();
         const url = window.URL.createObjectURL(blob);
         const a = document.createElement("a");
         a.href = url;
         a.download = `${type}_data_${new Date().toISOString().split("T")[0]}.csv`;
         document.body.appendChild(a);
         a.click();
         window.URL.revokeObjectURL(url);
         document.body.removeChild(a);

         toast.success(`تم تصدير بيانات ${type} بنجاح`);
      } catch (error) {
         console.error(`خطأ في تصدير بيانات ${type}:`, error);
         toast.error(`فشل في تصدير بيانات ${type}`);
      } finally {
         setSurveyLoading(false);
         setQuizLoading(false);
      }
   };

   return (
      <div className="space-y-6">
         <h1 className="text-3xl font-bold">التقارير</h1>

         <div className="grid gap-4 md:grid-cols-2">
            <Card>
               <CardHeader>
                  <CardTitle>بيانات الاختبارات</CardTitle>
                  <CardDescription>
                     تصدير جميع محاولات الاختبار مع معرفات المستخدمين المجهولة
                  </CardDescription>
               </CardHeader>
               <CardContent className="!mt-auto">
                  <Button
                     onClick={() => handleExport("quiz")}
                     disabled={quizLoading}
                     className="w-full !cursor-pointer"
                  >
                     <FileDown className="h-4 w-4 ml-2" />
                     تصدير بيانات الاختبارات
                  </Button>
               </CardContent>
            </Card>

            <Card>
               <CardHeader>
                  <CardTitle>بيانات الاستطلاع</CardTitle>
                  <CardDescription>
                     تصدير جميع استجابات الاستطلاع الديموغرافي مع معرفات
                     المستخدمين المجهولة
                  </CardDescription>
               </CardHeader>
               <CardContent className="!mt-auto">
                  <Button
                     onClick={() => handleExport("survey")}
                     disabled={surveyLoading}
                     className="w-full cursor-pointer"
                  >
                     <FileDown className="h-4 w-4 ml-2" />
                     تصدير بيانات الاستطلاع
                  </Button>
               </CardContent>
            </Card>
         </div>
      </div>
   );
}

export default Reports;
