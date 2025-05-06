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
   });
   if (!user)
      return NextResponse.json({ error: "User not found" }, { status: 404 });
   return NextResponse.json(
      {
         userId: user.id,
         score: user.score,
         hasFinishedProficiencyTest: user.hasFinishedProficiencyTest,
         proficiencyQuizFinishedAt: user.proficiencyQuizFinishedAt,
      },
      { status: 200 }
   );
}
