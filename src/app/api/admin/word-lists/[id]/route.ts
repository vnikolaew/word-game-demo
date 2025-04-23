import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } }
) {
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
    const id = parseInt(params.id);

    // Delete existing words
    await prisma.word.deleteMany({
      where: { wordListId: id },
    });

    // Update word list with new words
    const wordList = await prisma.wordList.update({
      where: { id },
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
    console.error("[ADMIN_WORD_LISTS_PUT]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
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

    const id = parseInt(params.id);

    await prisma.wordList.delete({
      where: { id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[ADMIN_WORD_LISTS_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}
