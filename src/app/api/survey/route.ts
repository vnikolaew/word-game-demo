import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const existingSurvey = await prisma.demographicSurvey.findUnique({
      where: { userId: session.user.id },
    });

    if (existingSurvey) {
      return NextResponse.json(
        { message: "Survey already exists" },
        { status: 400 }
      );
    }

    const {
      age,
      gender,
      educationLevel,
      nativeLanguage,
      otherLanguages,
      arabicProficiency,
      yearsLearningArabic,
    } = await req.json();

    // Save survey response
    const survey = await prisma.demographicSurvey.create({
      data: {
        userId: session.user.id,
        age,
        gender,
        educationLevel,
        nativeLanguage,
        otherLanguages,
        arabicProficiency,
        yearsLearningArabic,
      },
    });

    return NextResponse.json(survey, { status: 201 });
  } catch (error) {
    console.error("Error saving survey response:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
