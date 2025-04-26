"use client";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
   TableHeader,
   TableRow,
   TableHead,
   TableBody,
   TableCell,
} from "@/components/ui/table";
import { CustomDropdown } from "@/components/view/SurveyView";
import { Label } from "@radix-ui/react-label";
import {
   Table,
   Users,
   FileQuestion,
   CheckCircle,
   Trophy,
   Percent,
} from "lucide-react";
import React, { useEffect, useMemo, useState } from "react";

interface Data {
   totalUsers: number;
   totalQuizzes: number;
   totalQuizzesPercentage: number;
   totalCompletedQuizzes: number;
   totalHighScoreCompletedQuizzes: number;
}

function DashboardSkeleton() {
   return (
      <div className="space-y-8">
         <h1 className="text-3xl font-bold">نظرة عامة على لوحة التحكم</h1>
         <div className="grid gap-4 md:grid-cols-2">
            {[...Array(4)].map((_, i) => (
               <Card key={i}>
                  <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                     <Skeleton className="h-4 w-[100px]" />
                     <Skeleton className="h-4 w-4" />
                  </CardHeader>
                  <CardContent>
                     <Skeleton className="h-8 w-[60px] mb-2" />
                     <Skeleton className="h-3 w-[140px]" />
                  </CardContent>
               </Card>
            ))}
         </div>
         <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4">إحصائيات قائمة الكلمات</h2>
            <div className="rounded-md border">
               <Table>
                  <TableHeader>
                     <TableRow>
                        <TableHead className="text-right">
                           معرف قائمة الكلمات
                        </TableHead>
                        <TableHead className="text-right">
                           إجمالي الاختبارات
                        </TableHead>
                        <TableHead className="text-right">
                           الدرجات العالية (&gt;70%)
                        </TableHead>
                        <TableHead className="text-right">
                           معدل النجاح
                        </TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {[...Array(3)].map((_, i) => (
                        <TableRow key={i}>
                           <TableCell>
                              <Skeleton className="h-4 w-8" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-4 w-12" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-4 w-12" />
                           </TableCell>
                           <TableCell>
                              <Skeleton className="h-4 w-16" />
                           </TableCell>
                        </TableRow>
                     ))}
                  </TableBody>
               </Table>
            </div>
         </div>
      </div>
   );
}

function StatCard({
   title,
   value,
   icon: Icon,
   description,
}: {
   title: string;
   value: string | number;
   icon: any;
   description: string;
}) {
   return (
      <Card>
         <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{title}</CardTitle>
            <Icon className="h-4 w-4 text-muted-foreground" />
         </CardHeader>
         <CardContent>
            <div className="text-2xl font-bold">{value}</div>
            <p className="text-xs text-muted-foreground">{description}</p>
         </CardContent>
      </Card>
   );
}

const OPTIONS = [
   {
      value: "king_saud_university",
      label: "جامعة الملك سعود",
   },
   {
      value: "princess_nora_university",
      label: "جامعة الأميرة نورة بنت عبدالرحمن",
   },
   {
      value: "imam_mohammad_university",
      label: "جامعة الإمام محمد بن سعود الإسلامية",
   },
   {
      value: "majmaah_university",
      label: "جامعة المجمعة",
   },
   {
      value: "qassim_university",
      label: "جامعة القصيم",
   },
   {
      value: "other",
      label: "أخرى، الرجاء التحديد",
   },
   {
      value: "not_applicable",
      label: "لاينطبق",
   },
] as const;

function University() {
   const [data, setData] = useState<Data>(null!);
   const [error, setError] = useState(``);
   const [type, setType] = useState(``);

   const uniLabel = useMemo(() => {
      const label = OPTIONS.find((o) => o.value === type)?.label;
      return label ? `${label}  اللهجة` : `جميع الجامعات`;
   }, [type]);

   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      (async () => {
         setIsLoading(true);
         const res = await fetch(
            `/api/admin/stats/university?university=${encodeURIComponent(type)}`
         );
         if (res.ok) {
            const data = await res.json();
            setData(data);
         } else {
            setError(`An error ocurred`);
         }

         setIsLoading(false);
      })();
   }, [type]);

   if (isLoading || !data) {
      return <DashboardSkeleton />;
   }

   return (
      <div className="space-y-8">
         <h1 className="text-3xl font-bold">
            إحصائيات إكمال الاختبارات حسب الجامعة السعودية.
         </h1>
         <div className="space-y-2 w-full flex flex-col items-start">
            <Label htmlFor="uni" className="text-md">
               اختر الجامعة:
            </Label>

            <div className="!w-[400px]">
               <CustomDropdown
                  className="!p-2"
                  placeholder="يرجى اختيار إجابة"
                  options={OPTIONS}
                  value={type}
                  onChange={(type) => setType(type)}
               />
            </div>
         </div>

         <div className="grid gap-4 md:grid-cols-2">
            <StatCard
               title={`إجمالي عدد المستخدمين لـ ${uniLabel}`}
               value={data.totalUsers}
               icon={Users}
               description=""
            />
            <StatCard
               title={`إجمالي عدد الاختبارات التي تم إجراؤها لـ ${uniLabel}`}
               value={data.totalQuizzes}
               icon={FileQuestion}
               description=""
            />
            <StatCard
               title={`إجمالي عدد المواضيع المكتملة لـ ${uniLabel}`}
               value={data.totalCompletedQuizzes}
               icon={CheckCircle}
               description=""
            />

            <StatCard
               title={`العدد الإجمالي للفرق المكتملة التي حصلت على درجات 90% أو أعلى لـ ${uniLabel}`}
               value={data.totalHighScoreCompletedQuizzes}
               icon={Trophy}
               description=""
            />
            <StatCard
               title={`تم إكماله بالكامل من قبل مستخدمي هذه اللهجة مقارنة بجميع المستطلعة آراؤهم لـ ${uniLabel}`}
               value={`${data.totalQuizzesPercentage?.toFixed(2)}%`}
               icon={Percent}
               description=""
            />
         </div>
      </div>
   );
}

export default University;
