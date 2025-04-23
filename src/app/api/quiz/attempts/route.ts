import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function POST(request: Request) {
   try {
      const session = await getServerSession(authOptions);
      if (!session?.user) {
         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const data = await request.json();

      await prisma.quizAttempt.create({
         data: {
            ...data,
            userId: session.user.id,
         },
      });

      return NextResponse.json(
         { message: "Attempt saved", attempt: data },
         { status: 200 }
      );
   } catch (error) {
      console.error("Error saving attempt:", error);
      return NextResponse.json(
         { error: "Failed to save attempt" },
         { status: 500 }
      );
   }
}

export async function GET() {
   try {
      const session = await getServerSession(authOptions);
      if (!session?.user) {
         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const attempts = await prisma.quizAttempt.findMany({
         where: {
            userId: session.user.id,
         },
         orderBy: {
            createdAt: "desc",
         },
         include: {
            wordList: true,
         },
      });

      return NextResponse.json(attempts);
   } catch (error) {
      console.error("Error fetching attempts:", error);
      return NextResponse.json(
         { error: "Failed to fetch attempts" },
         { status: 500 }
      );
   }
}
