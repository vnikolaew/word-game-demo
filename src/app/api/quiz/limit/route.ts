import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

const LIMITS = {
   NOT_LIMITED: `أنت لست محدودا`,
} as const;

export const dynamic = "force-dynamic";

export async function GET() {
   const session = await getServerSession(authOptions);
   if (!session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
   }

   return NextResponse.json(
      { message: LIMITS.NOT_LIMITED, success: true, tryAgainIn: undefined },
      { status: 200 }
   );
}
