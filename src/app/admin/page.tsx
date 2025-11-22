"use client";

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
import { Users, CheckCircle, Clock, ArrowDown, ArrowUp, ArrowUpDown } from "lucide-react";

// Types
import { useAdminStats } from "./hooks";
import { HIGH_SCORE_THRESHOLD, showHeaderAndFooter } from "@/lib/utils";
import { useCallback, useEffect } from "react";
import { parseAsString, parseAsStringEnum, useQueryState } from "nuqs";

type QuizByWordList = {
   wordListId: number
   totalQuizzes: number
   highScoreQuizzes: number
}

export const dynamic = 'force-dynamic'

export default function AdminDashboard() {
   const { isLoading, stats } = useAdminStats();
   const [sort] = useQueryState(`sort`, parseAsString)
   const [order] = useQueryState(`order`, parseAsStringEnum([`asc`, `desc`]).withDefault(`asc`))

   const sortFn = useCallback((a: QuizByWordList, b: QuizByWordList) => {
      if (!sort?.length || !order?.length) return 0;

      if (sort === `id`) {
         return order === `asc` ? a.wordListId - b.wordListId : b.wordListId - a.wordListId;
      } else if (sort === `success_rate`) {
         const success_rate_a = (a.highScoreQuizzes / a.totalQuizzes)
         const success_rate_b = (b.highScoreQuizzes / b.totalQuizzes)

         return order === `asc` ? success_rate_a - success_rate_b : success_rate_b - success_rate_a;
      } else if (sort === `high_score`) {
         return order === `asc` ? a.highScoreQuizzes - b.highScoreQuizzes : b.highScoreQuizzes - a.highScoreQuizzes;
      } else if (sort === `total`) {
         return order === `asc` ? a.totalQuizzes - b.totalQuizzes : b.totalQuizzes - a.totalQuizzes;
      }
      return 0
   }, [sort, order])

   useEffect(() => {
      document.body.classList.add(`!bg-transparent`);
      showHeaderAndFooter();
   }, []);

   if (isLoading || !stats) {
      return <DashboardSkeleton/>;
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
                 description="درجات أعلى من 80%"
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
                   <Headings/>
                   <TableBody>
                      {stats.quizzesByWordList
                          .sort(sortFn)
                          .map((wordList) => (
                              <WordListRow
                                  key={wordList.wordListId}
                                  wordList={wordList}
                              />
                          ))}
                   </TableBody>
                </Table>
             </div>
          </div>
       </div>
   );
}

const WordListRow = ({ wordList }: { wordList: any }) => (
    <TableRow key={wordList.wordListId}>
       <TableCell>#{wordList.wordListId}</TableCell>
       <TableCell>{wordList.totalQuizzes}</TableCell>
       <TableCell>{wordList.highScoreQuizzes}</TableCell>
       <TableCell>
          {(wordList.totalQuizzes === 0
                  ? 0
                  : (wordList.highScoreQuizzes / wordList.totalQuizzes) * 100
          ).toFixed(1)}
          %
       </TableCell>
    </TableRow>
);

const SortButton = ({ field }: { field: string }) => {
   const [sort, setSort] = useQueryState(`sort`, parseAsString)
   const [order, setOrder] = useQueryState(`order`, parseAsStringEnum([`asc`, `desc`]).withDefault(`asc`))

   return (
       <span onClick={async _ => {
          await setSort(field)
          await setOrder(!order?.length ? `asc` : order === `asc` ? `desc` : `asc`)
       }} className={`!cursor-pointer !w-8 !h-fit`}>
          {field === sort ? order === `asc` ? (
              <ArrowDown size={14}/>
          ) : (
              <ArrowUp size={14}/>
          ) : <ArrowUpDown size={14} className={``}/>}
       </span>
   )
}

const Headings = () => (
    <TableHeader>
       <TableRow>
          <TableHead className="">
             <div className={`!inline-flex items-center !text-right !ml-auto !w-full`}>
                <SortButton field={`id`}/>
                معرف قائمة الكلمات
             </div>
          </TableHead>
          <TableHead className=" gap-1">
             <div className={`!inline-flex items-center !text-right !ml-auto !w-full`}>
                <SortButton field={`total`}/>
                إجمالي الاختبارات
             </div>
          </TableHead>
          <TableHead className=" gap-1">
             <div className={`!inline-flex items-center !text-right !ml-auto !w-full`}>
                <SortButton field={`high_score`}/>
                الدرجات العالية (&gt;{HIGH_SCORE_THRESHOLD}%)
             </div>
          </TableHead>
          <TableHead className=" gap-1">
             <div className={`!inline-flex items-center !text-right !ml-auto !w-full`}>
                <SortButton field={`success_rate`}/>
                معدل النجاح
             </div>
          </TableHead>
       </TableRow>
    </TableHeader>
);

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
             <Icon className="h-4 w-4 text-muted-foreground"/>
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
                       <Skeleton className="h-4 w-[100px]"/>
                       <Skeleton className="h-4 w-4"/>
                    </CardHeader>
                    <CardContent>
                       <Skeleton className="h-8 w-[60px] mb-2"/>
                       <Skeleton className="h-3 w-[140px]"/>
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
                                <Skeleton className="h-4 w-8"/>
                             </TableCell>
                             <TableCell>
                                <Skeleton className="h-4 w-12"/>
                             </TableCell>
                             <TableCell>
                                <Skeleton className="h-4 w-12"/>
                             </TableCell>
                             <TableCell>
                                <Skeleton className="h-4 w-16"/>
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
