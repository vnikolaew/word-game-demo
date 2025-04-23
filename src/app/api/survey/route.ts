import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { SurveyData } from "@/types";

export const dynamic = "force-dynamic";

export async function POST(req: Request) {
   try {
      const session = await getServerSession(authOptions);
      if (!session?.user) {
         return NextResponse.json(
            { message: "غير مصرح به / Unauthorized" },
            { status: 401 }
         );
      }

      const existingSurvey = await prisma.demographicSurvey.findUnique({
         where: { userId: session.user.id },
      });

      if (existingSurvey) {
         return NextResponse.json(
            { message: "الاستبيان موجود بالفعل / Survey already exists" },
            { status: 400 }
         );
      }

      const {
         nativeLanguage,
         otherNativeLanguage,
         languageAcquisition,
         otherAcquisitionLanguage,
         familyLanguage,
         otherFamilyLanguage,
         gender,
         age,
         highestEducation,
         arabicDialect,
         nationality,
         otherNationality,
         residence,
         otherResidence,
         languages,
         kindergartenLanguage,
         otherKindergartenLanguage,
         primaryLanguage,
         otherPrimaryLanguage,
         middleLanguage,
         otherMiddleLanguage,
         highSchoolLanguage,
         otherHighSchoolLanguage,
         universityLanguage,
         otherUniversityLanguage,
         readingHours,
         listeningHours,
         writingHours,
         speakingHours,
         attentionDisorder,
         readingDisorder,
         vision,
         handedness,
         currentUniversity,
      }: SurveyData = await req.json();

      // Validate required fields
      const requiredFields: (keyof SurveyData)[] = [
         // `currentUniversity`,
         "nativeLanguage",
         "languageAcquisition",
         "familyLanguage",
         "gender",
         "age",
         "highestEducation",
         "arabicDialect",
         "nationality",
         "residence",
         "languages",
         "kindergartenLanguage",
         "primaryLanguage",
         "middleLanguage",
         "highSchoolLanguage",
         "universityLanguage",
         "readingHours",
         "listeningHours",
         "writingHours",
         "speakingHours",
         "attentionDisorder",
         "readingDisorder",
         "vision",
         "handedness",
      ];

      const missingFields = requiredFields.filter((field) => !eval(field));
      if (missingFields.length > 0) {
         return NextResponse.json(
            {
               message: `حقول مطلوبة مفقودة / Missing required fields: ${missingFields.join(
                  ", "
               )}`,
            },
            { status: 400 }
         );
      }

      // Save survey response
      const survey = await prisma.demographicSurvey.create({
         data: {
            university: currentUniversity,
            userId: session.user.id,
            nativeLanguage,
            otherNativeLanguage,
            languageAcquisition,
            otherAcquisitionLanguage,
            familyLanguage,
            otherFamilyLanguage,
            gender,
            age,
            highestEducation,
            arabicDialect,
            nationality,
            otherNationality,
            residence,
            otherResidence,
            languages,
            kindergartenLanguage,
            otherKindergartenLanguage,
            primaryLanguage,
            otherPrimaryLanguage,
            middleLanguage,
            otherMiddleLanguage,
            highSchoolLanguage,
            otherHighSchoolLanguage,
            universityLanguage,
            otherUniversityLanguage,
            readingHours,
            listeningHours,
            writingHours,
            speakingHours,
            attentionDisorder,
            readingDisorder,
            vision,
            handedness,
         },
      });

      return NextResponse.json(
         {
            message: "تم حفظ الاستبيان بنجاح / Survey saved successfully",
            data: survey,
         },
         { status: 201 }
      );
   } catch (error) {
      console.error("Error saving survey response:", error);
      return NextResponse.json(
         { message: "خطأ في الخادم / Internal server error" },
         { status: 500 }
      );
   }
}
