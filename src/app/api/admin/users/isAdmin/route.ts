import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function GET(request: NextRequest) {
   const session = await getServerSession(authOptions);
   if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
   }

   const user = await prisma.user.findFirst({
      where: {
         id: session?.user?.id,
         email: session?.user?.email,
      },
   });

   return NextResponse.json({ isAdmin: user?.isAdmin });
}
