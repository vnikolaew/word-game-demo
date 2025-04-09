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
      wordListId,
      score,
      correctWords,
      incorrectWords,
      correctNonWords,
      incorrectNonWords,
      completionTime,
      responses,
    } = await req.json();

    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Save quiz attempt
    const quizAttempt = await prisma.quizAttempt.create({
      data: {
        userId: user.id,
        wordListId,
        score,
        correctWords,
        incorrectWords,
        correctNonWords,
        incorrectNonWords,
        completionTime,
        responses,
      },
    });

    // Update user's completed word lists
    await prisma.user.update({
      where: { id: user.id },
      data: {
        completedWordLists: {
          push: wordListId,
        },
      },
    });

    // Update word list completion count
    await prisma.wordList.update({
      where: { id: wordListId },
      data: {
        timesCompleted: {
          increment: 1,
        },
      },
    });

    return NextResponse.json(quizAttempt, { status: 201 });
  } catch (error) {
    console.error("Error saving quiz attempt:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
