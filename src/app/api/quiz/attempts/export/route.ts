import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";

export const dynamic = "force-dynamic";

export async function GET() {
   try {
      const session = await getServerSession(authOptions);
      if (!session?.user) {
         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const attempts = await prisma.quizAttempt.findMany({
         where: {
            userId: session.user.id,
         },
         include: {
            wordList: true,
         },
         orderBy: {
            createdAt: "desc",
         },
      });

      // CSV header
      const csvHeader = [
         "UTC Date and Time",
         "User Device Type",
         "User OS",
         "User Browser",
         "User Monitor Size",
         "User Viewport Size",
         "Page number",
         "Item shown in the page",
         "Wordlist ID",
         "User Reaction Time in milliseconds",
         "User Response: word/nonword",
         "Response type: keyboard/buttons",
         "Correct: 1, 0",
         "Timeout: 1, 0",
         "Answer: word/nonword",
         "Quiz score: -100/100",
         "Quiz status: completed/dropped",
      ].join(",");

      // Process each attempt and its responses
      const csvRows: string[] = [];
      attempts.forEach((attempt) => {
         const responses = attempt.responses as any[];
         responses.forEach((response) => {
            const row = [
               new Date(attempt.createdAt).toISOString(),
               attempt.deviceType,
               attempt.deviceOS,
               attempt.deviceBrowser,
               attempt.monitorSize,
               attempt.viewportSize,
               response.pageNumber,
               response.word,
               attempt.wordListId,
               Math.round(response.responseTime),
               response.isRealWord ? "word" : "nonword",
               response.responseType,
               response.isCorrect ? "1" : "0",
               response.isTimeout ? "1" : "0",
               response.isNonWord ? "nonword" : "word",
               attempt.score,
               attempt.quizStatus,
            ].join(",");
            csvRows.push(row);
         });
      });

      // Combine header and rows
      const csv = [csvHeader, ...csvRows].join("\n");

      // Return as CSV file
      return new NextResponse(csv, {
         headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": "attachment; filename=quiz_attempts.csv",
         },
      });
   } catch (error) {
      console.error("Error exporting attempts:", error);
      return NextResponse.json(
         { error: "Failed to export attempts" },
         { status: 500 }
      );
   }
}
