import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Fetch user data including quiz attempts and demographic survey
    const user = await prisma.user.findUnique({
      where: {
        email: session.user.email,
      },
      select: {
        id: true,
        name: true,
        email: true,
        surveyResponses: {
          select: {
            age: true,
            gender: true,
            educationLevel: true,
            nativeLanguage: true,
            otherLanguages: true,
            arabicProficiency: true,
            yearsLearningArabic: true,
          },
          take: 1,
          orderBy: {
            createdAt: "desc",
          },
        },
        quizAttempts: {
          select: {
            id: true,
            score: true,
            correctWords: true,
            incorrectWords: true,
            correctNonWords: true,
            incorrectNonWords: true,
            npxionTime: true,
            createdAt: true,
          },
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    if (!user) {
      return new NextResponse("User not found", { status: 404 });
    }

    // Transform the response to match our frontend interface
    const response = {
      ...user,
      demographicSurvey: user.surveyResponses[0] || null,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("[PROFILE_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.email) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    // Delete user and all related data (cascading delete will handle relations)
    await prisma.user.delete({
      where: {
        email: session.user.email,
      },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[PROFILE_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
