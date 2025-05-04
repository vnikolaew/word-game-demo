import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET() {
   const session = await getServerSession(authOptions);
   if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
   }

   const user = await prisma.user.findUnique({
      where: { id: session.user.id },
      select: {
         id: true,
         hasFinishedProficiencyTest: true,
         metadata: true,
         score: true,
         proficiencyQuizFinishedAt: true,
      },
   });
   if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });

   const body = {
      userId: user.id,
      score: user.score,
      hasFinishedProficiencyTest:
         user.proficiencyQuizFinishedAt instanceof Date,
      proficiencyQuizFinishedAt: user.proficiencyQuizFinishedAt,
   };
   return NextResponse.json(body, { status: 200 });
}
