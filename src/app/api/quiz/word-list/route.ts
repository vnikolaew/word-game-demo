import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    // Get user's completed word lists
    const user = await prisma.user.findUnique({
      where: { email: session.user.email! },
      select: { completedWordLists: true },
    });

    // Get a random word list that hasn't been completed by this user
    const wordList = await prisma.wordList.findFirst({
      where: {
        NOT: {
          id: {
            in: user?.completedWordLists || [],
          },
        },
      },
      orderBy: {
        timesCompleted: "asc",
      },
    });

    if (!wordList) {
      return NextResponse.json(
        { message: "No available word lists found" },
        { status: 404 }
      );
    }

    return NextResponse.json(wordList);
  } catch (error) {
    console.error("Error fetching word list:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
