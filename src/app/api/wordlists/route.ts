import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { Word } from "@prisma/client";
import { authOptions } from "@/lib/auth";
import _ from "lodash";

const MAX_ATTEMPTS = 200;

export const dynamic = "force-dynamic";

export const revalidate = 0

function shuffleArray<T>(array: T[]): T[] {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = shuffled[i];
      shuffled[i] = shuffled[j];
      shuffled[j] = temp;
   }

   return shuffled;
}

export async function getNewUserWordList() {
   'use server'

   try {
      // Get the current user's session
      const session = await getServerSession(authOptions);

      if (!session) {
         console.error("No session found");
         return null
      }

      if (!session.user) {
         console.error("No user in session");
         return null
      }

      if (!session.user.id) {
         console.error("No user ID in session");
         return null
      }

      const userId = session.user.id;

      // Verify user exists
      const user = await prisma.user.findUnique({
         where: { id: userId, email: session?.user?.email ?? undefined },
      });

      if (!user) {
         console.error("User not found:", userId);
         return null
      }

      // Check number of attempts
      const attemptCount = await prisma.quizAttempt.count({
         where: { userId },
      });

      if (attemptCount >= MAX_ATTEMPTS) {
         return null
      }

      // Find a word list that hasn't been used by this user in their attempts
      const wordList = await prisma.wordList.findFirst({
         where: {
            NOT: {
               quizAttempts: {
                  some: {
                     userId: userId,
                  },
               },
            },
         },
         orderBy: {
            timesUsed: "asc",
         },
         include: {
            words: true,
         },
      });

      if (!wordList) {
         return null
      }

      // Update usage statistics
      await prisma.wordList.update({
         where: { id: wordList.id },
         data: {
            timesUsed: { increment: 1 },
            lastUsedAt: new Date(),
         },
      });

      const words = wordList.words.filter(w => !w.isNonWord).map(w => w.word);
      const non_words = wordList.words.filter(w => w.isNonWord).map(w => w.word);

      const shuffledWords = _.shuffle([...words, ...non_words])

      // Format the response
      const response = {
         id: wordList.id,
         words,
         nonWords: non_words,
         timesUsed: wordList.timesUsed,
         lastUsedAt: wordList.lastUsedAt,
         shuffledWords,
         attemptsRemaining: MAX_ATTEMPTS - attemptCount,
      };

      return response
   } catch (error) {
      console.error("Error getting word list:", error);
      return null
   }
}

// Get a word list for the current user
export async function GET() {
   try {
      // Get the current user's session
      const session = await getServerSession(authOptions);

      if (!session) {
         console.error("No session found");
         return NextResponse.json(
            { error: "No session found" },
            { status: 401 }
         );
      }

      if (!session.user) {
         console.error("No user in session");
         return NextResponse.json(
            { error: "No user in session" },
            { status: 401 }
         );
      }

      if (!session.user.id) {
         console.error("No user ID in session");
         return NextResponse.json(
            { error: "No user ID in session" },
            { status: 401 }
         );
      }

      const userId = session.user.id;

      // Verify user exists
      const user = await prisma.user.findUnique({
         where: { id: userId, email: session?.user?.email ?? undefined },
      });

      if (!user) {
         console.error("User not found:", userId);
         return NextResponse.json({ error: "User not found" }, { status: 404 });
      }

      // Check number of attempts
      const attemptCount = await prisma.quizAttempt.count({
         where: { userId },
      });

      if (attemptCount >= MAX_ATTEMPTS) {
         return NextResponse.json(
            { error: "Maximum number of attempts reached" },
            { status: 403 }
         );
      }

      // Find a word list that hasn't been used by this user in their attempts
      const wordList = await prisma.wordList.findFirst({
         where: {
            NOT: {
               quizAttempts: {
                  some: {
                     userId: userId,
                  },
               },
            },
         },
         orderBy: {
            timesUsed: "asc",
         },
         include: {
            words: true,
         },
      });

      if (!wordList) {
         return NextResponse.json(
            { error: "No more available word lists" },
            { status: 404 }
         );
      }

      // Update usage statistics
      await prisma.wordList.update({
         where: { id: wordList.id },
         data: {
            timesUsed: { increment: 1 },
            lastUsedAt: new Date(),
         },
      });

      // Format the response
      const response = {
         id: wordList.id,
         words: wordList.words
            .filter((w: Word) => !w.isNonWord)
            .map((w: Word) => w.word),
         nonWords: wordList.words
            .filter((w: Word) => w.isNonWord)
            .map((w: Word) => w.word),
         timesUsed: wordList.timesUsed,
         lastUsedAt: wordList.lastUsedAt,
         attemptsRemaining: MAX_ATTEMPTS - attemptCount,
      };

      return NextResponse.json(response);
   } catch (error) {
      console.error("Error getting word list:", error);
      return NextResponse.json(
         { error: "Failed to get word list" },
         { status: 500 }
      );
   }
}

// Create a new word list
export async function POST(request: Request) {
   try {
      const session = await getServerSession(authOptions);
      if (!session?.user?.id) {
         return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
      }

      const body = await request.json();
      const { words, nonWords } = body as {
         words: string[];
         nonWords: string[];
      };

      if (!Array.isArray(words) || !Array.isArray(nonWords)) {
         return NextResponse.json(
            { error: "Invalid request body" },
            { status: 400 }
         );
      }

      const wordList = await prisma.wordList.create({
         data: {
            words: {
               create: [
                  ...words.map((word) => ({
                     word,
                     isNonWord: false,
                  })),
                  ...nonWords.map((word) => ({
                     word,
                     isNonWord: true,
                  })),
               ],
            },
         },
         include: {
            words: true,
         },
      });

      const response = {
         id: wordList.id,
         words: wordList.words
            .filter((w: Word) => !w.isNonWord)
            .map((w: Word) => w.word),
         nonWords: wordList.words
            .filter((w: Word) => w.isNonWord)
            .map((w: Word) => w.word),
         timesUsed: wordList.timesUsed,
         lastUsedAt: wordList.lastUsedAt,
      };

      return NextResponse.json(response);
   } catch (error) {
      console.error("Error creating word list:", error);
      return NextResponse.json(
         { error: "Failed to create word list" },
         { status: 500 }
      );
   }
}
