import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export async function GET(req: NextRequest) {
   try {
      const uni = req.nextUrl.searchParams.get(`university`);
      const session = await getServerSession(authOptions);

      if (!session?.user?.email) {
         return new NextResponse("Unauthorized", { status: 401 });
      }

      const total = await prisma.quizAttempt.count({
         where: { quizStatus: `completed` },
      });
      const quizzes = await prisma.quizAttempt.findMany({
         include: { user: { select: { id: true, name: true } } },
         where: {
            user: {
               surveyResponses: {
                  some: uni?.length ? { universityLanguage: uni } : {},
               },
            },
         },
      });

      const totalUsers = new Set(...quizzes.map((q) => q.user.id)).size;
      const totalQuizzes = quizzes.length;
      const totalQuizzesPercentage =
         quizzes.length > 0 ? 100 * (quizzes.length / total) : 0;
      const totalCompletedQuizzes = quizzes.filter(
         (q) => q.quizStatus === `completed`
      ).length;

      const totalHighScoreCompletedQuizzes = quizzes.filter(
         (q) => q.quizStatus === `completed` && q.score >= 90
      ).length;

      return NextResponse.json(
         {
            totalUsers,
            totalQuizzes,
            totalQuizzesPercentage,
            totalCompletedQuizzes,
            totalHighScoreCompletedQuizzes,
         },
         { status: 200 }
      );
   } catch (error) {
      console.error("[ADMIN_STATS_GET_UNIVERSITY]", error);
      return new NextResponse("Internal error", { status: 500 });
   }
}
