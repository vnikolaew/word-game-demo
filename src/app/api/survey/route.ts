import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { authOptions } from "@/lib/auth";
import { SurveyData } from "@/types";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
   try {
      const session = await getServerSession(authOptions);
      if (!session?.user?.id) {
         return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
      }

      const survey = await prisma.demographicSurvey.findUnique({
         where: {
            userId: session.user.id,
         },
      });

      if (!survey) {
         return NextResponse.json(null, { status: 404 });
      }

      return NextResponse.json(survey, { status: 200 });
   } catch (error) {
      console.error("Error fetching user survey:", error);
      return NextResponse.json(
         { message: "Internal server error" },
         { status: 500 }
      );
   }
}

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
         age_of_acquiring_arabic,
         listening_proficiency,
         reading_proficiency,
         speaking_proficiency,
         writing_proficiency,
         years_living_in_arabic_countries_months,
         years_living_in_arabic_countries_years,
         years_living_in_arabic_environments_months,
         years_living_in_arabic_environments_years,
      }: SurveyData = await req.json();

      // Validate required fields
      const requiredFields: (keyof SurveyData)[] = [
         "age",
         "gender",
         "highestEducation",
         "nationality",

         "nativeLanguage",
         "languageAcquisition",
         "languages",

         `age_of_acquiring_arabic`,
         `years_living_in_arabic_countries_years`,
         `years_living_in_arabic_environments_years`,

         "kindergartenLanguage",
         "primaryLanguage",
         "middleLanguage",
         "highSchoolLanguage",
         "universityLanguage",

         `speaking_proficiency`,
         `listening_proficiency`,
         `reading_proficiency`,
         `writing_proficiency`,

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
            age_of_acquiring_arabic,
            listening_proficiency,
            reading_proficiency,
            speaking_proficiency,
            writing_proficiency,
            years_living_in_arabic_countries_years,
            years_living_in_arabic_environments_years,
            years_living_in_arabic_countries_months,
            years_living_in_arabic_environments_months,
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

      revalidatePath(`/quiz`);
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
