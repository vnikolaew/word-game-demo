import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateAnonymousId } from "@/lib/utils";
import { DemographicSurvey, QuizAttempt, User } from "@prisma/client";

export const dynamic = "force-dynamic";

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
   _: Request,
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
         const quizzes = await prisma.quizAttempt.findMany({
            include: {
               user: {
                  select: {
                     id: true,
                     metadata: true,
                     score: true,
                     hasFinishedProficiencyTest: true,
                     proficiencyQuizFinishedAt: true,
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

         // Transform quiz data into detailed response-level data
         data = quizzes.flatMap((quiz) => {
            const responses = quiz.responses as any[];
            return responses.map((response) =>
               quizResponseToCsvRow(quiz, response)
            );
         });
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

         data = surveys.map(quizSurveyToCsvRow);
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

function quizSurveyToCsvRow(
   survey: DemographicSurvey & { user: Partial<User> }
) {
   return {
      anonymousUserId: generateAnonymousId(survey.user.id!),
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
      userDomain: process.env.WEB_DOMAIN!,
      kindergartenLanguage: survey.kindergartenLanguage,
      otherKindergartenLanguage: survey.otherKindergartenLanguage,
      primaryLanguage: survey.primaryLanguage,
      otherPrimaryLanguage: survey.otherPrimaryLanguage,
      middleLanguage: survey.middleLanguage,
      otherMiddleLanguage: survey.otherMiddleLanguage,
      highSchoolLanguage: survey.highSchoolLanguage,
      otherHighSchoolLanguage: survey.otherHighSchoolLanguage,
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
   };
}

function quizResponseToCsvRow(
   quiz: QuizAttempt & { user: Partial<User> },
   response: any
) {
   const userResponse =
      response.response === 0
         ? `word`
         : response.response === null
           ? ``
           : `nonword`;

   return {
      "UTC Date and Time": quiz.createdAt.toISOString(),
      "User Private ID": generateAnonymousId(quiz.user.id!),
      "User Device Type": quiz.deviceType,
      "User OS": quiz.deviceOS,
      "User Browser": quiz.deviceBrowser,
      "User Domain": process.env.WEB_DOMAIN!,
      "User Proficiency Score":
         !quiz.user.score ||
         !(quiz.user.proficiencyQuizFinishedAt instanceof Date)
            ? `مجهول`
            : quiz.user.score?.toString(),
      "User Monitor Size": quiz.monitorSize,
      "User Viewport Size": quiz.viewportSize,
      "Page number": response.pageNumber,
      "Item shown in the page": response.word,
      "Wordlist ID": quiz.wordListId,
      "Quiz ID": quiz.id,
      "Quiz Duration in milliseconds": quiz.totalQuizDuration ?? `Unknown`,
      "User Reaction Time in milliseconds": response.responseTime,
      "User Response": userResponse,
      "Response type": response.responseType,
      Correct: response.isCorrect ? 1 : 0,
      Timeout: response.isTimeout || response.response === null,
      Answer: response.isNonWord ? "nonword" : "word",
      "Quiz score": quiz.score,
      "Quiz status": quiz.quizStatus,
   };
}
