import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const LIMITS = {
   ONE_HOUR: {
      limit: 4,
      message: `لقد أجريتَ الاختبار ٤ مرات أو أكثر خلال الساعة الماضية. يُرجى المحاولة مرة أخرى خلال {minutes} دقيقة.`,
   },
   ONE_DAY: {
      limit: 20,
      message: `لقد أجريتَ الاختبار ٢٠ مرة أو أكثر خلال الـ ٢٤ ساعة الماضية. يُرجى المحاولة مرة أخرى خلال {hours} ساعة.`,
   },
   NOT_LIMITED: `أنت لست محدودا`,
} as const;

const ONE_HOUR_MS = 1000 * 60 * 60;
const ONE_DAY_MS = 1000 * 60 * 60 * 24;

export async function GET() {
   const session = await getServerSession(authOptions);
   if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
   }

   const ONE_HOUR_AGO = new Date(Date.now() - ONE_HOUR_MS); // Latest hour,
   const ONE_DAY_AGO = new Date(Date.now() - ONE_DAY_MS); // Latest 24 hours,

   const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
         quizAttempts: {
            orderBy: { createdAt: `desc` },
            where: {
               createdAt: {
                  gte: ONE_DAY_AGO,
               },
            },
         },
      },
   });

   const quizzesLastHour =
      user?.quizAttempts.filter((a) => a.createdAt >= ONE_HOUR_AGO).length ?? 0;

   if (quizzesLastHour >= LIMITS.ONE_HOUR.limit) {
      const latestQuiz = user?.quizAttempts.at(0)?.createdAt;
      const tryAgainIn =
         Math.abs(latestQuiz!.getTime() - ONE_HOUR_AGO.getTime()) / (1000 * 60);

      return NextResponse.json(
         { message: LIMITS.ONE_HOUR.message, success: false, tryAgainIn },
         { status: 400 }
      );
   }
   const quizzesLastDay =
      user?.quizAttempts.filter((a) => a.createdAt >= ONE_DAY_AGO).length ?? 0;

   if (quizzesLastDay >= LIMITS.ONE_DAY.limit) {
      const latestQuiz = user?.quizAttempts.at(0)?.createdAt;
      const tryAgainIn =
         Math.abs(latestQuiz!.getTime() - ONE_DAY_AGO.getTime()) /
         (1000 * 60 * 60);

      return NextResponse.json(
         { message: LIMITS.ONE_DAY.message, success: false, tryAgainIn },
         { status: 400 }
      );
   }

   return NextResponse.json(
      { message: LIMITS.NOT_LIMITED, success: true, tryAgainIn: undefined },
      { status: 200 }
   );
}
