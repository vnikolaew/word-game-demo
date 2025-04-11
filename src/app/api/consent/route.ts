import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { consentVersion } = await req.json();

    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Save user consent
    const consent = await prisma.userConsent.create({
      data: {
        userId: user.id,
        consentVersion,
        consentedAt: new Date(),
      },
    });

    return NextResponse.json(consent, { status: 201 });
  } catch (error) {
    console.error("Error saving user consent:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
