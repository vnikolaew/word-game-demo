'use server'

import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

/*
 * Get user consents.
 */
export async function getUserConsents() {
   try {
      const session = await getServerSession(authOptions);
      if (!session?.user?.id) {
         return null!
      }

      const consents = await prisma.userConsent.findMany({
         where: {
            userId: session.user.id,
         },
      });

      return consents;
   } catch {
      return []
   }
}