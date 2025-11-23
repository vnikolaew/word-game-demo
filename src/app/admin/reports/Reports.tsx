"use client";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button";
import {
   Card,
   CardHeader,
   CardTitle,
   CardDescription,
   CardContent,
} from "@/components/ui/card";
import { downloadFile } from "@/lib/utils";
import { FileDown } from "lucide-react";
import React, { useState } from "react";
import { toast } from "sonner";
import { Spinner } from "@/components/ui/Spinner";

function Reports({ total_count, survey_count }: { total_count: number, survey_count: number }) {
   const [surveyLoading, setSurveyLoading] = useState(false);
   const [quizLoading, setQuizLoading] = useState(false);

   const handleExport = async (type: "quiz" | "survey", { limit, offset }: { limit: number, offset: number }) => {
      try {
         if (type === `quiz`) {
            setQuizLoading(true);
            setSurveyLoading(false);
         } else {
            setQuizLoading(false);
            setSurveyLoading(true);
         }

         const response = await fetch(`/api/admin/reports/${type}?limit=${limit}&offset=${offset}`);
         if (!response.ok) throw new Error(`فشل في تصدير بيانات ${type}`);

         const blob = await response.blob();
         await downloadFile(
             `${type}_data_${new Date().toISOString().split("T")[0]}.csv`,
             blob
         );

         toast.success(`تم تصدير بيانات ${type} بنجاح`);
      } catch (error) {
         console.error(`خطأ في تصدير بيانات ${type}:`, error);
         toast.error(`فشل في تصدير بيانات ${type}`);
      } finally {
         setSurveyLoading(false);
         setQuizLoading(false);
      }
   };

   async function handleDownloadReport(index: number) {
      const [limit, offset] = [100, index * 100]
      await handleExport(`quiz`, { limit, offset })
   }

   return (
       <div className="space-y-6">
          <h1 className="text-3xl font-bold">التقارير</h1>

          <div className="grid gap-4 md:grid-cols-2">
             <Card>
                <CardHeader>
                   <CardTitle>
                      بيانات المجموعة ({total_count} في المجموع)
                   </CardTitle>
                   <CardDescription>
                      تصدير جميع محاولات الاختبار مع معرفات المستخدمين المجهولة
                   </CardDescription>
                </CardHeader>
                <CardContent className="!mt-auto">
                   <DropdownMenu modal={false}>
                      <DropdownMenuTrigger asChild>
                         <Button
                             // onClick={() => handleExport("quiz")}
                             disabled={quizLoading}
                             className="w-full cursor-pointer !inline-flex items-center gap-2"
                         >
                            {quizLoading ? (
                                <>
                                   <Spinner size={`sm`}/>
                                   جاري التحميل...
                                </>
                            ) : (
                                <>
                                   <FileDown className="h-4 w-4 ml-2"/>
                                   تصدير بيانات الاختبارات
                                </>
                            )}
                         </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className={`!z-[100]`}>
                         <DropdownMenuLabel className={`!text-right !w-[300px] !text-wrap`}>
                            اختيارات الاختبار (مرتبة تنازليًا حسب طابع زمني للإكمال)
                         </DropdownMenuLabel>
                         <DropdownMenuSeparator/>
                         {Array
                             .from({ length: Math.ceil(total_count / 100) })
                             .map((_, i) => (
                                 <DropdownMenuItem onClick={_ => handleDownloadReport(i)}
                                                   className={`!text-right !cursor-pointer`} key={i}>
                                    <div className={`!flex items-center gap-2 justify-between !w-full`}>
                                       يتم تشغيل الاختبار #{i * 100}-{(i + 1) * 100}
                                       <FileDown className="h-4 w-4 ml-2 !text-black"/>
                                    </div>
                                 </DropdownMenuItem>
                             ))}
                      </DropdownMenuContent>
                   </DropdownMenu>
                </CardContent>
             </Card>

             <Card>
                <CardHeader>
                   <CardTitle>
                      بيانات المسح ({survey_count} في المجموع)
                   </CardTitle>
                   <CardDescription>
                      تصدير جميع استجابات الاستطلاع الديموغرافي مع معرفات
                      المستخدمين المجهولة
                   </CardDescription>
                </CardHeader>
                <CardContent className="!mt-auto">
                   <Button
                       onClick={() => handleExport("survey")}
                       disabled={surveyLoading}
                       className="w-full cursor-pointer !inline-flex items-center gap-2"
                   >
                      {surveyLoading ? (
                          <>
                             <Spinner size={`sm`}/>
                             جاري التحميل...
                          </>
                      ) : (
                          <>
                             <FileDown className="h-4 w-4 ml-2"/>
                             تصدير بيانات الاستطلاع
                          </>
                      )}
                   </Button>
                </CardContent>
             </Card>
          </div>
       </div>
   );
}

export default Reports;
