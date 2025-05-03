import { cache } from "react";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";

export const getCurrentUser = cache(async () => {
   let session = await getServerSession();
   if (!session?.user?.id) return null;

   return await prisma.user.findUnique({
      where: {
         id: session?.user?.id,
      },
   });
});
