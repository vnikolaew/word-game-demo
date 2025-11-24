import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const LIMITS = {
   ONE_HOUR: {
      limit: 4,
      message: `لقد أجريت الاختبار مرتين أو أكثر خلال الساعة الماضية. يُرجى المحاولة مرة أخرى خلال {minutes}.`,
   },
   ONE_DAY: {
      limit: 10,
      message: `لقد أجريت الاختبار ٥ مرات أو أكثر خلال الـ ٢٤ ساعة الماضية. يُرجى المحاولة مرة أخرى خلال {hours}.`,
   },
   NOT_LIMITED: `أنت لست محدودا`,
} as const;

const ONE_HOUR_MS = 1000 * 60 * 60;
const ONE_MINUTE_MS = 1000 * 60
const ONE_DAY_MS = 1000 * 60 * 60 * 24;

export const dynamic = "force-dynamic";

export async function GET() {
   const session = await getServerSession(authOptions);
   if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
   }

   const now = new Date();
   const startOfHour = new Date(now);
   startOfHour.setMinutes(0, 0, 0);
   
   const startOfDay = new Date(now);
   startOfDay.setHours(0, 0, 0, 0);

   const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      include: {
         quizAttempts: {
            orderBy: { createdAt: `desc` },
            where: {
               createdAt: {
                  gte: startOfDay,
               },
            },
         },
      },
   });

   const quizzesLastHour =
       user?.quizAttempts.filter((a) => a.createdAt >= startOfHour).length ?? 0;

   if (quizzesLastHour >= LIMITS.ONE_HOUR.limit) {
      const nextHour = new Date(startOfHour.getTime() + ONE_HOUR_MS);
      const tryAgainIn = Math.ceil((nextHour.getTime() - now.getTime()) / ONE_MINUTE_MS);

      return NextResponse.json(
          { message: LIMITS.ONE_HOUR.message, success: false, tryAgainIn },
          { status: 400 }
      );
   }
   const quizzesLastDay =
       user?.quizAttempts.filter((a) => a.createdAt >= startOfDay).length ?? 0;

   if (quizzesLastDay >= LIMITS.ONE_DAY.limit) {
      const nextDay = new Date(startOfDay.getTime() + ONE_DAY_MS);
      const tryAgainIn = Math.ceil((nextDay.getTime() - now.getTime()) / ONE_HOUR_MS);

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
