import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Word, WordList } from "../../../../../prisma/generated/client";
export async function GET() {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    const wordLists = await prisma.wordList.findMany({
      where: {
        userAssignments: {
          some: {
            userId: userId,
          },
        },
      },
      include: {
        words: true,
      },
    });

    const response = wordLists.map((list: any) => ({
      id: list.id,
      words: list.words
        .filter((w: Word) => !w.isNonWord)
        .map((w: Word) => w.word),
      nonWords: list.words
        .filter((w: Word) => w.isNonWord)
        .map((w: Word) => w.word),
      timesUsed: list.timesUsed,
      lastUsedAt: list.lastUsedAt,
    }));

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error getting user word lists:", error);
    return NextResponse.json(
      { error: "Failed to get user word lists" },
      { status: 500 }
    );
  }
}
