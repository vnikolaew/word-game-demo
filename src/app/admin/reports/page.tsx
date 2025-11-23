import { Metadata } from "next";
import Reports from "./Reports";
import { APP_NAME } from "@/lib/consts";
import { prisma } from "@/lib/prisma";

export const metadata: Metadata = {
   title: `تقارير الإدارة`,
   description: `عرض تقارير الإدارة التفصيلية`,
   applicationName: APP_NAME,
   creator: `Sara Fahad`,
   authors: [{
      name: `Sara Fahad`
   }],
   keywords: [
      `لغز`,
      `استبيان`,
      `استطلاع`,
      `الناطقة بالعربية`,
      `امتحان`,
      `كلمات`,
       `تقرير`
   ]
};

export const dynamic = "force-dynamic";

export default async function ReportsPage() {
   const totalQuizCount = await prisma.quizAttempt.count({
      where: { quizStatus: "completed" }
   })
   const totalSurveysCount = await prisma.demographicSurvey.count({})

   return <Reports survey_count={totalSurveysCount} total_count={totalQuizCount}/>;
}
