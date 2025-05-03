"use server";

import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";

export async function saveProficiencyTestScore(score: number) {
   const session = await getServerSession();
   if (!session?.user?.id) return { success: false };

   const user = await prisma.user.findUnique({
      where: { id: session.user.id },
   });

   if (!user) return { success: false };
   const success = await prisma.user.updateProficiencyScore(user.id, score);
   return { success };
}
