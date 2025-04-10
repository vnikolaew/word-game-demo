import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// In-memory storage for attempts (replace with database in production)
const attempts: any[] = [];

export async function POST(request: Request) {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const data = await request.json();

    // Add user info and timestamp
    const attempt = {
      ...data,
      userId: session.user.email,
      timestamp: new Date().toISOString(),
    };

    // Store attempt
    attempts.push(attempt);

    return NextResponse.json(attempt);
  } catch (error) {
    console.error("Error saving attempt:", error);
    return NextResponse.json(
      { error: "Failed to save attempt" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const session = await getServerSession();
    if (!session?.user?.email) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Get user's latest attempt
    const userAttempts = attempts.filter(
      (attempt) => attempt.userId === session.user?.email
    );
    const latestAttempt = userAttempts[userAttempts.length - 1];

    if (!latestAttempt) {
      return NextResponse.json({ error: "No attempts found" }, { status: 404 });
    }

    return NextResponse.json(latestAttempt);
  } catch (error) {
    console.error("Error fetching attempts:", error);
    return NextResponse.json(
      { error: "Failed to fetch attempts" },
      { status: 500 }
    );
  }
}
