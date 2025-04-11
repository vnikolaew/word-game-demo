import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { Word } from "../../../../prisma/generated/client";

// Get a word list for the current user
export async function GET() {
  try {
    // Get the current user's session
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const userId = session.user.id;

    // Find the least used word list that hasn't been assigned to this user
    const wordList = await prisma.wordList.findFirst({
      where: {
        NOT: {
          userAssignments: {
            some: {
              userId: userId,
            },
          },
        },
      },
      orderBy: {
        timesUsed: "asc",
      },
      include: {
        words: true,
      },
    });

    if (!wordList) {
      return NextResponse.json(
        { error: "No available word lists" },
        { status: 404 }
      );
    }

    // Assign this word list to the user and update usage statistics in a transaction
    await prisma.$transaction([
      prisma.userWordList.create({
        data: {
          userId: userId,
          wordListId: wordList.id,
        },
      }),
      prisma.wordList.update({
        where: { id: wordList.id },
        data: {
          timesUsed: { increment: 1 },
          lastUsedAt: new Date(),
        },
      }),
    ]);

    // Format the response
    const response = {
      id: wordList.id,
      words: wordList.words
        .filter((w: Word) => !w.isNonWord)
        .map((w: Word) => w.word),
      nonWords: wordList.words
        .filter((w: Word) => w.isNonWord)
        .map((w: Word) => w.word),
      timesUsed: wordList.timesUsed,
      lastUsedAt: wordList.lastUsedAt,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error getting word list:", error);
    return NextResponse.json(
      { error: "Failed to get word list" },
      { status: 500 }
    );
  }
}

// Create a new word list
export async function POST(request: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const body = await request.json();
    const { words, nonWords } = body as { words: string[]; nonWords: string[] };

    if (!Array.isArray(words) || !Array.isArray(nonWords)) {
      return NextResponse.json(
        { error: "Invalid request body" },
        { status: 400 }
      );
    }

    const wordList = await prisma.wordList.create({
      data: {
        words: {
          create: [
            ...words.map((word) => ({
              word,
              isNonWord: false,
            })),
            ...nonWords.map((word) => ({
              word,
              isNonWord: true,
            })),
          ],
        },
      },
      include: {
        words: true,
      },
    });

    const response = {
      id: wordList.id,
      words: wordList.words.filter((w) => !w.isNonWord).map((w) => w.word),
      nonWords: wordList.words.filter((w) => w.isNonWord).map((w) => w.word),
      timesUsed: wordList.timesUsed,
      lastUsedAt: wordList.lastUsedAt,
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error creating word list:", error);
    return NextResponse.json(
      { error: "Failed to create word list" },
      { status: 500 }
    );
  }
}
