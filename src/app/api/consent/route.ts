import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export async function POST(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const { consentVersion } = await req.json();

    // Check if user exists
    const user = await prisma.user.findUnique({
      where: { id: session.user.id },
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Check for existing consent using userId
    const existingConsent = await prisma.userConsent.findUnique({
      where: { userId: session.user.id },
    });

    if (existingConsent) {
      return NextResponse.json(
        { message: "Consent already exists" },
        { status: 400 }
      );
    }

    // Save user consent
    const consent = await prisma.userConsent.create({
      data: {
        userId: session.user.id,
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

export async function GET(req: Request) {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
      return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
    }

    const consent = await prisma.userConsent.findUnique({
      where: {
        userId: session.user.id,
      },
    });

    if (!consent) {
      return NextResponse.json(null, { status: 200 });
    }

    return NextResponse.json(consent, { status: 200 });
  } catch (error) {
    console.error("Error fetching user consent:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}
