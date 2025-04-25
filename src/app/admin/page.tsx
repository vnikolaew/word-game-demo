"use client";

import { useEffect, useState } from "react";

// Components
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
   Table,
   TableBody,
   TableCell,
   TableHead,
   TableHeader,
   TableRow,
} from "@/components/ui/table";

// Icons
import { Users, CheckCircle, Clock } from "lucide-react";

// Types
import { DashboardStats } from "@/types";

export default function AdminDashboard() {
   const [stats, setStats] = useState<DashboardStats | null>(null);
   const [isLoading, setIsLoading] = useState(true);

   useEffect(() => {
      const fetchStats = async () => {
         try {
            const response = await fetch("/api/admin/stats");
            if (!response.ok) throw new Error("فشل في جلب الإحصائيات");
            const data = await response.json();
            setStats(data);
         } catch (error) {
            console.error("خطأ في جلب الإحصائيات:", error);
         } finally {
            setIsLoading(false);
         }
      };

      fetchStats();
   }, []);

   if (isLoading || !stats) {
      return <DashboardSkeleton />;
   }

   return (
      <div className="space-y-8">
         <h1 className="text-3xl font-bold">نظرة عامة على لوحة التحكم</h1>

         <div className="grid gap-4 md:grid-cols-2">
            <StatCard
               title="إجمالي المستخدمين"
               value={stats.totalUsers}
               icon={Users}
               description="المستخدمون المسجلون"
            />
            <StatCard
               title="الاختبارات المكتملة"
               value={stats.completedQuizzes}
               icon={CheckCircle}
               description="إجمالي المكتمل"
            />
            <StatCard
               title="اختبارات الدرجات العالية"
               value={stats.highScoreQuizzes}
               icon={CheckCircle}
               description="درجات أعلى من 70%"
            />

            <StatCard
               title="متوسط وقت الاختبار"
               value={`${Math.round(stats.averageQuizTime / 1000)}ث`}
               icon={Clock}
               description="الوقت لكل اختبار"
            />
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
                           الدرجات العالية (&gt;90%)
                        </TableHead>
                        <TableHead className="text-right">
                           معدل النجاح
                        </TableHead>
                     </TableRow>
                  </TableHeader>
                  <TableBody>
                     {stats.quizzesByWordList.map((wordList) => (
                        <TableRow key={wordList.wordListId}>
                           <TableCell>#{wordList.wordListId}</TableCell>
                           <TableCell>{wordList.totalQuizzes}</TableCell>
                           <TableCell>{wordList.highScoreQuizzes}</TableCell>
                           <TableCell>
                              {(wordList.totalQuizzes === 0
                                 ? 0
                                 : (wordList.highScoreQuizzes /
                                      wordList.totalQuizzes) *
                                   100
                              ).toFixed(1)}
                              %
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
