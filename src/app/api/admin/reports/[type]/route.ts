import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { createHash } from "crypto";

// Function to generate a consistent anonymous ID for a user
function generateAnonymousId(userId: string) {
  return createHash("sha256")
    .update(userId + process.env.NEXTAUTH_SECRET)
    .digest("hex")
    .slice(0, 8);
}

// Function to convert array to CSV
function arrayToCSV(data: any[]) {
  if (data.length === 0) return "";

  const headers = Object.keys(data[0]);
  const rows = [
    headers.join(","),
    ...data.map((row) =>
      headers
        .map((header) => {
          const value = row[header];
          // Handle arrays, nulls, and escape commas
          if (Array.isArray(value)) return `"${value.join(";")}"`;
          if (value === null) return "";
          if (typeof value === "string" && value.includes(","))
            return `"${value}"`;
          return value;
        })
        .join(",")
    ),
  ];

  return rows.join("\n");
}

export async function GET(
  req: Request,
  { params }: { params: { type: string } }
) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
    });

    if (!user?.isAdmin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    let data;
    const { type } = params;

    if (type === "quiz") {
      const quizzes = await prisma.quizAttempt.findMany({
        include: {
          user: {
            select: {
              id: true,
            },
          },
          wordList: {
            include: {
              words: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      data = quizzes.map((quiz) => ({
        anonymousUserId: generateAnonymousId(quiz.user.id),
        quizId: quiz.id,
        wordListId: quiz.wordListId,
        score: quiz.score,
        correctWords: quiz.correctWords,
        incorrectWords: quiz.incorrectWords,
        correctNonWords: quiz.correctNonWords,
        incorrectNonWords: quiz.incorrectNonWords,
        completionTime: quiz.npxionTime,
        totalWords: quiz.wordList.words.length,
        date: quiz.createdAt,
      }));
    } else if (type === "survey") {
      const surveys = await prisma.demographicSurvey.findMany({
        include: {
          user: {
            select: {
              id: true,
            },
          },
        },
        orderBy: {
          createdAt: "desc",
        },
      });

      data = surveys.map((survey) => ({
        anonymousUserId: generateAnonymousId(survey.user.id),
        age: survey.age,
        gender: survey.gender,
        educationLevel: survey.educationLevel,
        nativeLanguage: survey.nativeLanguage,
        otherLanguages: survey.otherLanguages,
        arabicProficiency: survey.arabicProficiency,
        yearsLearningArabic: survey.yearsLearningArabic,
        date: survey.createdAt,
      }));
    } else {
      return new NextResponse("Invalid report type", { status: 400 });
    }

    const csv = arrayToCSV(data);

    return new NextResponse(csv, {
      headers: {
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename=${type}_data_${
          new Date().toISOString().split("T")[0]
        }.csv`,
      },
    });
  } catch (error) {
    console.error("[ADMIN_REPORTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
