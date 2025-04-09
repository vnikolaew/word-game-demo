import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
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

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Save survey response
    const survey = await prisma.demographicSurvey.create({
      data: {
        userId: user.id,
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
