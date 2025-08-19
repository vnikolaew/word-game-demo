import {NextRequest, NextResponse} from "next/server";
import {getServerSession} from "next-auth";
import {authOptions} from "@/lib/auth";
import {prisma} from "@/lib/prisma";
import {HIGH_SCORE_THRESHOLD} from "@/lib/utils";
import {QuizAttemptWhereInput, UserWhereInput} from "@prisma/client";

export const dynamic = "force-dynamic";

const DIALECT_OPTIONS = [
   {value: "saudi", label: "سعودية"},
   {value: "emirati", label: "إماراتية"},
   {value: "bahraini", label: "بحرينية"},
   {value: "kuwaiti", label: "كويتية"},
   {value: "yemeni", label: "يمنية"},
   {value: "qatari", label: "قطرية"},
   {value: "omani", label: "عمانية"},
   {value: "jordanian", label: "أردنية"},
   {value: "syrian", label: "سورية"},
   {value: "lebanese", label: "لبنانية"},
   {value: "palestinian", label: "فلسطينية"},
   {value: "iraqi", label: "عراقية"},
   {value: "sudanese", label: "سودانية"},
   {value: "egyptian", label: "مصرية"},
   {value: "libyan", label: "ليبية"},
   {value: "tunisian", label: "تونسية"},
   {value: "algerian", label: "جزائرية"},
   {value: "moroccan", label: "مغربية"},
   {value: "mauritanian", label: "موريتانية"},
] as const;

export async function GET(req: NextRequest) {
   try {
      const dialect = req.nextUrl.searchParams.get(`dialect`);
      const session = await getServerSession(authOptions);

      if (!session?.user?.email) {
         return new NextResponse("Unauthorized", {status: 401});
      }

      const total = await prisma.quizAttempt.count({
         where: {quizStatus: `completed`},
      });

      const filter: QuizAttemptWhereInput = {
         ...(dialect?.length && dialect?.toLowerCase() !== `other`
             ? {
                user: {
                   surveyResponses: {
                      some: {
                         arabicDialect: {
                            contains: dialect,
                            mode: `insensitive`,
                         },
                      },
                   },
                },
             }
             : dialect?.toLowerCase() === `other` ? {
                user: {
                   surveyResponses: {
                      some: {
                         arabicDialect: {
                            notIn: DIALECT_OPTIONS.map(o => o.value),
                            mode: `insensitive`,
                         },
                      },
                   },
                },

             } : {}),
      }

      const quizzes = await prisma.quizAttempt.findMany({
         include: {user: {select: {id: true, name: true}}},
         where: filter,
      });

      const userFilter: UserWhereInput = dialect?.length && dialect?.toLowerCase() !== `other`
          ? {
             surveyResponses: {
                some: {
                   arabicDialect: {
                      contains: dialect,
                      mode: `insensitive`,
                   },
                },
             },
          }
          : dialect?.toLowerCase() === `other` ? {
             surveyResponses: {
                some: {
                   arabicDialect: {
                      notIn: DIALECT_OPTIONS.map(o => o.value),
                      mode: `insensitive`,
                   },
                },
             },
          } : {}
      const totalUsers = await prisma.user.count({where: userFilter});

      const totalQuizzes = quizzes.length;
      const totalQuizzesPercentage = quizzes.length > 0 ? 100 * (quizzes.length / total) : 0;
      const totalCompletedQuizzes = quizzes.filter(
          (q) => q.quizStatus === `completed`
      ).length;

      const totalHighScoreCompletedQuizzes = quizzes.filter(
          (q) => q.quizStatus === `completed` && q.score >= HIGH_SCORE_THRESHOLD
      ).length;

      return NextResponse.json(
          {
             totalUsers,
             totalQuizzes,
             totalQuizzesPercentage,
             totalCompletedQuizzes,
             totalHighScoreCompletedQuizzes,
          },
          {status: 200}
      );
   } catch (error) {
      console.error("[ADMIN_STATS_GET_DIALECT]", error);
      return new NextResponse("Internal error", {status: 500});
   }
}
