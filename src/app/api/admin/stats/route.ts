import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

const HIGH_SCORE_THRESHOLD = 90;

export async function GET() {
   try {
      const session = await getServerSession(authOptions);

      if (!session?.user?.email) {
         return new NextResponse("Unauthorized", { status: 401 });
      }

      const user = await prisma.user.findUnique({
         where: {
            email: session?.user?.email,
         },
      });

      if (!user?.isAdmin) {
         return new NextResponse("Unauthorized", { status: 401 });
      }

      // Get total users
      const totalUsers = await prisma.user.count();

      // Get quiz statistics
      const quizzes = await prisma.quizAttempt.findMany({
         where: { quizStatus: `completed` },
      });
      const completedQuizzes = quizzes.length;
      const highScoreQuizzes = quizzes.filter(
         (quiz) => quiz.score >= HIGH_SCORE_THRESHOLD
      ).length;

      // Calculate average quiz time
      const totalTime = quizzes.reduce(
         (acc, quiz) => acc + quiz.totalQuizDuration,
         0
      );
      const averageQuizTime =
         completedQuizzes > 0 ? Math.round(totalTime / completedQuizzes) : 0;

      // Get statistics by word list
      const wordLists = await prisma.wordList.findMany({
         include: {
            quizAttempts: true,
         },
      });

      const quizzesByWordList = wordLists.map((wordList) => ({
         wordListId: wordList.id,
         totalQuizzes: wordList.quizAttempts.length,
         highScoreQuizzes: wordList.quizAttempts.filter(
            (quiz) => quiz.score >= HIGH_SCORE_THRESHOLD
         ).length,
      }));

      return NextResponse.json({
         totalUsers,
         completedQuizzes,
         highScoreQuizzes,
         averageQuizTime,
         quizzesByWordList,
      });
   } catch (error) {
      console.error("[ADMIN_STATS_GET]", error);
      return new NextResponse("Internal error", { status: 500 });
   }
}
