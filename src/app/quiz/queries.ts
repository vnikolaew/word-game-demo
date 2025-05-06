import { cache } from "react";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export const getCurrentUser = cache(async () => {
   let session = await getServerSession(authOptions);
   if (!session?.user?.id) return null;

   return await prisma.user.findUnique({
      where: {
         id: session?.user?.id,
      },
      select: {
         id: true,
         name: true,
         email: true,
         hasProlificEmail: true,
         metadata: true,
      },
   });
});
