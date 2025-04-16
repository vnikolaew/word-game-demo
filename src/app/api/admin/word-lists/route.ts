import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (!user?.isAdmin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const wordLists = await prisma.wordList.findMany({
      include: {
        words: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(wordLists);
  } catch (error) {
    console.error("[ADMIN_WORD_LISTS_GET]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);

    if (!session?.user?.id) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const user = await prisma.user.findUnique({
      where: {
        id: session.user.id,
      },
    });

    if (!user?.isAdmin) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const { words } = await req.json();

    const wordList = await prisma.wordList.create({
      data: {
        words: {
          create: words.map((w: { word: string; isNonWord: boolean }) => ({
            word: w.word.replace(/^\*/, ""), // Remove * prefix if present
            isNonWord: w.isNonWord,
          })),
        },
      },
      include: {
        words: true,
      },
    });

    return NextResponse.json(wordList);
  } catch (error) {
    console.error("[ADMIN_WORD_LISTS_POST]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
