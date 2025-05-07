/*
  Warnings:

  - Added the required column `age_of_acquiring_arabic` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listening_proficiency` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading_proficiency` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speaking_proficiency` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `writing_proficiency` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `years_living_in_arabic_countries_years` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `years_living_in_arabic_environments_years` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DemographicSurvey" ADD COLUMN     "age_of_acquiring_arabic" TEXT NOT NULL,
ADD COLUMN     "listening_proficiency" TEXT NOT NULL,
ADD COLUMN     "reading_proficiency" TEXT NOT NULL,
ADD COLUMN     "speaking_proficiency" TEXT NOT NULL,
ADD COLUMN     "writing_proficiency" TEXT NOT NULL,
ADD COLUMN     "years_living_in_arabic_countries_months" TEXT,
ADD COLUMN     "years_living_in_arabic_countries_years" TEXT NOT NULL,
ADD COLUMN     "years_living_in_arabic_environments_months" TEXT,
ADD COLUMN     "years_living_in_arabic_environments_years" TEXT NOT NULL;
