import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { generateAnonymousId } from "@/lib/utils";
import { QuizAttempt, Word, WordList } from "@prisma/client";
import groupBy from "lodash/groupBy";
import Excel from "exceljs";
import { APP_NAME } from "@/lib/consts";

export const dynamic = "force-dynamic";

async function exportSurveysCSV(rows: CSVSurveyRow[]) {
   const workbook = new Excel.Workbook();
   workbook.title = `User Surveys - ${APP_NAME} - ${new Date().toLocaleDateString()}`
   workbook.created = new Date();
   workbook.modified = new Date();
   workbook.creator = `Sara Fahad`

   const sheet = workbook.addWorksheet('Sheet 1');
   sheet.columns = ([
      { header: "Anonymous User Id", key: "anonymousUserId" },
      { header: "User Domain", key: "userDomain" },
      { header: "Native Language", key: "nativeLanguage" },
      { header: "Other Native Language", key: "otherNativeLanguage" },
      { header: "Language Acquisition", key: "languageAcquisition" },
      { header: "Other Acquisition Language", key: "otherAcquisitionLanguage" },
      { header: "Family Language", key: "familyLanguage" },
      { header: "Other Family Language", key: "otherFamilyLanguage" },
      { header: "Gender", key: "gender" },
      { header: "Age", key: "age" },
      { header: "Highest Education", key: "highestEducation" },
      { header: "Arabic Dialect", key: "arabicDialect" },
      { header: "Nationality", key: "nationality" },
      { header: "Other Nationality", key: "otherNationality" },
      { header: "Residence", key: "residence" },
      { header: "Other Residence", key: "otherResidence" },
      { header: "University", key: "university" },
      { header: "Languages", key: "languages" },
      { header: "Kindergarten Language", key: "kindergartenLanguage" },
      { header: "Other Kindergarten Language", key: "otherKindergartenLanguage" },
      { header: "Primary Language", key: "primaryLanguage" },
      { header: "Other Primary Language", key: "otherPrimaryLanguage" },
      { header: "Middle Language", key: "middleLanguage" },
      { header: "Other Middle Language", key: "otherMiddleLanguage" },
      { header: "High School Language", key: "highSchoolLanguage" },
      { header: "Other High School Language", key: "otherHighSchoolLanguage" },
      { header: "University Language", key: "universityLanguage" },
      { header: "Other University Language", key: "otherUniversityLanguage" },
      { header: "Reading Hours", key: "readingHours" },
      { header: "Listening Hours", key: "listeningHours" },
      { header: "Writing Hours", key: "writingHours" },
      { header: "Speaking Hours", key: "speakingHours" },
      { header: "Attention Disorder", key: "attentionDisorder" },
      { header: "Reading Disorder", key: "readingDisorder" },
      { header: "Vision", key: "vision" },
      { header: "Handedness", key: "handedness" },
      { header: "Date", key: "date" }
   ]).map(c => ({
      ...c, style: { font: { bold: true } }
   }));

   sheet.addRows(rows);
   return await workbook.csv.writeBuffer();
}

async function exportQuizRowsCSV(rows: CSVQuizExportRow[]) {
   const workbook = new Excel.Workbook();
   workbook.title = `User Quizzes - ${APP_NAME} - ${new Date().toLocaleDateString()}`
   workbook.created = new Date();
   workbook.modified = new Date();
   workbook.creator = `Sara Fahad`

   const sheet = workbook.addWorksheet('Sheet 1');
   sheet.columns = [
      { header: "UTC Date and Time", key: "utcDateTime" },
      { header: "User Private ID", key: "userPrivateId" },
      { header: "User Device Type", key: "userDeviceType" },
      { header: "User OS", key: "userOS" },
      { header: "User Browser", key: "userBrowser" },
      { header: "User Monitor Size", key: "userMonitorSize" },
      { header: "User Viewport Size", key: "userViewportSize" },
      { header: "Page number", key: "pageNumber" },
      { header: "Item shown in the page", key: "itemShown" },
      { header: "Wordlist ID", key: "wordlistId" },
      { header: "User Domain", key: "userDomain" },
      { header: "Quiz ID", key: "quizId" },
      { header: "Quiz Duration in milliseconds", key: "quizDuration" },
      { header: "User Reaction Time in milliseconds", key: "userReactionTime" },
      { header: "User Response", key: "userResponse" },
      { header: "Response type", key: "responseType" },
      { header: "Correct", key: "correct" },
      { header: "Timeout", key: "timeout" },
      { header: "Answer", key: "answer" },
      { header: "Quiz score", key: "quizScore" },
      { header: "Quiz status", key: "quizStatus" }
   ].map(c => ({
      ...c, style: { font: { bold: true } }
   }));
   sheet.getRow(1).font = { bold: true, name: `Calibri` }
   sheet.getRow(0).font = { bold: true, name: `Calibri` }

   const excelRows = rows.map(row => ({
      utcDateTime: row["UTC Date and Time"],
      userPrivateId: row["User Private ID"],
      userDeviceType: row["User Device Type"],
      userOS: row["User OS"],
      userBrowser: row["User Browser"],
      userMonitorSize: row["User Monitor Size"],
      userViewportSize: row["User Viewport Size"],
      pageNumber: row["Page number"],
      itemShown: row["Item shown in the page"],
      wordlistId: row["Wordlist ID"],
      userDomain: row["User Domain"],
      quizId: row["Quiz ID"],
      quizDuration: row["Quiz Duration in milliseconds"],
      userReactionTime: row["User Reaction Time in milliseconds"],
      userResponse: row["User Response"],
      responseType: row["Response type"],
      correct: row["Correct"],
      timeout: row["Timeout"],
      answer: row["Answer"],
      quizScore: row["Quiz score"],
      quizStatus: row["Quiz status"],
   }))

   sheet.addRows(excelRows);
   return await workbook.csv.writeBuffer();
}

export type QuizWordResponse = {
   word: string
   response: number
   isCorrect: boolean
   isNonWord: boolean
   isTimeout: boolean
   pageNumber: number
   responseTime: number
   timestamp: number
   responseType: string
}

export type CSVSurveyRow = {
   anonymousUserId: string;
   userDomain: string;

   nativeLanguage: string | null;
   otherNativeLanguage: string | null;

   languageAcquisition: string | null;
   otherAcquisitionLanguage: string | null;

   familyLanguage: string | null;
   otherFamilyLanguage: string | null;

   gender: string | null;
   age: number | string | null;

   highestEducation: string | null;
   arabicDialect: string | null;

   nationality: string | null;
   otherNationality: string | null;

   residence: string | null;
   otherResidence: string | null;

   university: string | null;

   languages: string[] | string | null;

   kindergartenLanguage: string | null;
   otherKindergartenLanguage: string | null;

   primaryLanguage: string | null;
   otherPrimaryLanguage: string | null;

   middleLanguage: string | null;
   otherMiddleLanguage: string | null;

   highSchoolLanguage: string | null;
   otherHighSchoolLanguage: string | null;

   universityLanguage: string | null;
   otherUniversityLanguage: string | null;

   readingHours: number | string | null;
   listeningHours: number | string | null;
   writingHours: number | string | null;
   speakingHours: number | string | null;

   attentionDisorder: string | boolean | null;
   readingDisorder: string | boolean | null;

   vision: string | null;

   handedness: "Left-handed" | "Right-handed" | string | null;

   date: Date | string;
}

export interface CSVQuizExportRow {
   "UTC Date and Time": string;
   "User Private ID": string;
   "User Device Type": string;
   "User OS": string;
   "User Browser": string;
   "User Monitor Size": string | number | null;
   "User Viewport Size": string | number | null;
   "Page number": number;
   "Item shown in the page": string;
   "Wordlist ID": string | number;
   "User Domain": string;
   "Quiz ID": string | number;
   "Quiz Duration in milliseconds": number | string; // includes "Unknown"
   "User Reaction Time in milliseconds": number | null;
   "User Response": string | null;
   "Response type": string;
   Correct: 0 | 1;
   Timeout: boolean;
   Answer: string;
   "Quiz score": number;
   "Quiz status": string;
}


export function isInt(obj: any) {
   try {
      if (isNaN(obj)) {
         return false;
      }

      const x = parseFloat(obj);
      return (x | 0) === x;
   } catch {
      return false;
   }
}

export async function GET(
    req: NextRequest,
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
      let data_buffer: Excel.Buffer | undefined;

      const { type } = params;
      const limit = isInt(req.nextUrl.searchParams.get("limit"))
          ? parseInt(req.nextUrl.searchParams.get("limit") ?? ``)
          : 100;
      const offset = isInt(req.nextUrl.searchParams.get("offset"))
          ? parseInt(req.nextUrl.searchParams.get("offset") ?? ``)
          : 0;

      if (type === "quiz") {
         const quizzes = await prisma.quizAttempt.findMany({
            skip: offset,
            take: limit,
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

         const all_words = groupBy(await prisma.word.findMany(),
             w => w.wordListId)

         // Transform quiz data into detailed response-level data
         data = quizzes.flatMap((quiz) =>
             getQuizCSVRow(quiz, all_words));
         data_buffer = await exportQuizRowsCSV(data as CSVQuizExportRow[])

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

         data = surveys
             .map((survey) => ({
                anonymousUserId: generateAnonymousId(survey.user.id),
                userDomain: process.env.WEB_DOMAIN!,
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
             } as const));
         data_buffer = await exportSurveysCSV(data)
      } else {
         return new NextResponse("Invalid report type", { status: 400 });
      }

      const fromTo = type === `quiz`
          ? `(${offset * 100 + 1}-${offset * 100 + limit})`
          : ``

      return new NextResponse(data_buffer, {
         headers: {
            "Content-Type":
                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
            "Content-Disposition": `attachment; filename=${type}_data${fromTo}_${
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

          const timestamp = typeof response.timestamp === `number`
              ? new Date(response.timestamp).toISOString()
              : quiz.createdAt?.toISOString()

          return {
             "UTC Date and Time": timestamp,
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