import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateAnonymousId } from "@/lib/utils";
import groupBy from "lodash/groupBy";
import { QuizAttempt, Word, WordList } from "@prisma/client";

export const dynamic = "force-dynamic";

export type QuizWordResponse = {
   word: string
   response: number
   isCorrect: boolean
   isNonWord: boolean
   isTimeout: boolean
   pageNumber: number
   responseTime: number
   responseType: string
}

// Function to convert array to CSV
function arrayToCSV(data: any[]) {
   if (data.length === 0) return "";

   const headers = Object.keys(data[0]);
   const rows = [
      headers.join(","),
      ...data.map((row) =>
          headers
              .map((header) => {
                 const value = row[header];
                 // Handle arrays, nulls, and escape commas
                 if (Array.isArray(value)) return `"${value.join(";")}"`;
                 if (value === null) return "";
                 if (typeof value === "string" && value.includes(","))
                    return `"${value}"`;
                 return value;
              })
              .join(",")
      ),
   ];

   return rows.join("\n");
}

export async function GET(
    req: Request,
    { params }: { params: { type: string } }
) {
   try {
      const session = await getServerSession(authOptions);

      if (!session?.user?.email) {
         return new NextResponse("Unauthorized", { status: 401 });
      }

      const user = await prisma.user.findUnique({
         where: {
            email: session.user.email,
         },
      });

      if (!user?.isAdmin) {
         return new NextResponse("Unauthorized", { status: 401 });
      }

      let data;
      const { type } = params;

      if (type === "quiz") {
         const quizzes: (QuizAttempt & {
            wordList: WordList,
            user: { id: string }
         })[] = await prisma.quizAttempt.findMany({
            include: {
               user: {
                  select: {
                     id: true,
                  },
               },
               wordList: {
                  include: {
                     words: true,
                  },
               },
            },
            orderBy: {
               createdAt: "desc",
            },
         });

         const all_words = groupBy(await prisma.word.findMany(),
             w => w.wordListId)

         // Transform quiz data into detailed response-level data
         data = quizzes.flatMap((quiz) => getQuizCSVRow(quiz, all_words));

      } else if (type === "survey") {
         const surveys = await prisma.demographicSurvey.findMany({
            include: {
               user: {
                  select: {
                     id: true,
                  },
               },
            },
            orderBy: {
               createdAt: "desc",
            },
         });

         data = surveys.map((survey) => ({
            anonymousUserId: generateAnonymousId(survey.user.id),
            nativeLanguage: survey.nativeLanguage,
            otherNativeLanguage: survey.otherNativeLanguage,
            languageAcquisition: survey.languageAcquisition,
            otherAcquisitionLanguage: survey.otherAcquisitionLanguage,
            familyLanguage: survey.familyLanguage,
            otherFamilyLanguage: survey.otherFamilyLanguage,
            gender: survey.gender,
            age: survey.age,
            highestEducation: survey.highestEducation,
            arabicDialect: survey.arabicDialect,
            nationality: survey.nationality,
            otherNationality: survey.otherNationality,
            residence: survey.residence,
            otherResidence: survey.otherResidence,
            university: survey.university,
            languages: survey.languages,
            kindergartenLanguage: survey.kindergartenLanguage,
            otherKindergartenLanguage: survey.otherKindergartenLanguage,
            primaryLanguage: survey.primaryLanguage,
            otherPrimaryLanguage: survey.otherPrimaryLanguage,
            middleLanguage: survey.middleLanguage,
            otherMiddleLanguage: survey.otherMiddleLanguage,
            highSchoolLanguage: survey.highSchoolLanguage,
            otherHighSchoolLanguage: survey.otherHighSchoolLanguage,
            userDomain: process.env.WEB_DOMAIN!,
            universityLanguage: survey.universityLanguage,
            otherUniversityLanguage: survey.otherUniversityLanguage,
            readingHours: survey.readingHours,
            listeningHours: survey.listeningHours,
            writingHours: survey.writingHours,
            speakingHours: survey.speakingHours,
            attentionDisorder: survey.attentionDisorder,
            readingDisorder: survey.readingDisorder,
            vision: survey.vision,
            handedness: [`yes`, `no`].includes(survey.handedness)
                ? survey.handedness === `yes`
                    ? `Left-handed`
                    : `Right-handed`
                : survey.handedness,
            date: survey.createdAt,
         }));
      } else {
         return new NextResponse("Invalid report type", { status: 400 });
      }

      const csv = arrayToCSV(data);

      return new NextResponse(csv, {
         headers: {
            "Content-Type": "text/csv",
            "Content-Disposition": `attachment; filename=${type}_data_${
                new Date().toISOString().split("T")[0]
            }.csv`,
         },
      });
   } catch (error) {
      console.error("[ADMIN_REPORTS_GET]", error);
      return new NextResponse("Internal error", { status: 500 });
   }
}

const WORD = `word`
const NONWORD = `nonword`

function getQuizCSVRow(quiz: QuizAttempt & {
   wordList: WordList,
   user: { id: string }
}, all_words: Record<string, Word[]>) {
   const responses = quiz.responses as QuizWordResponse[];
   const current_list = all_words[quiz.wordListId]

   const correctness = responses.map(response => {
      const userResponse = response.response === 0
          ? NONWORD : response.response === null ? `` : WORD

      const current_word = current_list
          ?.find(w => w.word === response.word)

      return current_word?.isNonWord
          ? userResponse === NONWORD
          : userResponse === WORD
   })
   const score = correctness.filter(Boolean).length;

   return responses
       .sort((a, b) => a.pageNumber - b.pageNumber)
       .map((response, index) => {
          const correct = correctness[index]

          const userResponse = response.response === 0
              ? NONWORD : response.response === null ? `` : WORD
          const current_word = current_list
              ?.find(w => w.word === response.word)

          return {
             "UTC Date and Time": quiz.createdAt.toISOString(),
             "User Private ID": generateAnonymousId(quiz.user.id),
             "User Device Type": quiz.deviceType,
             "User OS": quiz.deviceOS,
             "User Browser": quiz.deviceBrowser,
             "User Monitor Size": quiz.monitorSize,
             "User Viewport Size": quiz.viewportSize,
             "Page number": response.pageNumber,
             "Item shown in the page": response.word,
             "Wordlist ID": quiz.wordList.original_id,
             "User Domain": process.env.WEB_DOMAIN!,
             "Quiz ID": quiz.id,
             "Quiz Duration in milliseconds":
                 quiz.totalQuizDuration ?? `Unknown`,
             "User Reaction Time in milliseconds": response.responseTime,
             "User Response": userResponse,
             "Response type": response.responseType,
             Correct: correct ? 1 : 0,
             Timeout: response.isTimeout || response.response === null,
             Answer: current_word?.isNonWord ? NONWORD : WORD,
             "Quiz score": score,
             "Quiz status": quiz.quizStatus,
          };
       })
}