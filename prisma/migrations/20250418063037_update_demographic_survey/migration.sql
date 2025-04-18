/*
  Warnings:

  - You are about to drop the column `arabic_proficiency` on the `DemographicSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `education_level` on the `DemographicSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `other_languages` on the `DemographicSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `years_learning_arabic` on the `DemographicSurvey` table. All the data in the column will be lost.
  - Added the required column `arabic_dialect` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `attention_disorder` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `family_language` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `handedness` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `high_school_language` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `highest_education` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `kindergarten_language` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `language_acquisition` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `languages` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `listening_hours` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `middle_language` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nationality` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `primary_language` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading_disorder` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `reading_hours` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `residence` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `speaking_hours` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `university_language` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `vision` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `writing_hours` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_browser` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_os` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `device_type` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `monitor_size` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `quiz_status` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.
  - Added the required column `viewport_size` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DemographicSurvey" DROP COLUMN "arabic_proficiency",
DROP COLUMN "education_level",
DROP COLUMN "other_languages",
DROP COLUMN "years_learning_arabic",
ADD COLUMN     "arabic_dialect" TEXT NOT NULL,
ADD COLUMN     "attention_disorder" TEXT NOT NULL,
ADD COLUMN     "family_language" TEXT NOT NULL,
ADD COLUMN     "handedness" TEXT NOT NULL,
ADD COLUMN     "high_school_language" TEXT NOT NULL,
ADD COLUMN     "highest_education" TEXT NOT NULL,
ADD COLUMN     "kindergarten_language" TEXT NOT NULL,
ADD COLUMN     "language_acquisition" TEXT NOT NULL,
ADD COLUMN     "languages" TEXT NOT NULL,
ADD COLUMN     "listening_hours" TEXT NOT NULL,
ADD COLUMN     "middle_language" TEXT NOT NULL,
ADD COLUMN     "nationality" TEXT NOT NULL,
ADD COLUMN     "other_acquisition_language" TEXT,
ADD COLUMN     "other_family_language" TEXT,
ADD COLUMN     "other_high_school_language" TEXT,
ADD COLUMN     "other_kindergarten_language" TEXT,
ADD COLUMN     "other_middle_language" TEXT,
ADD COLUMN     "other_nationality" TEXT,
ADD COLUMN     "other_native_language" TEXT,
ADD COLUMN     "other_primary_language" TEXT,
ADD COLUMN     "other_residence" TEXT,
ADD COLUMN     "other_university_language" TEXT,
ADD COLUMN     "primary_language" TEXT NOT NULL,
ADD COLUMN     "reading_disorder" TEXT NOT NULL,
ADD COLUMN     "reading_hours" TEXT NOT NULL,
ADD COLUMN     "residence" TEXT NOT NULL,
ADD COLUMN     "speaking_hours" TEXT NOT NULL,
ADD COLUMN     "university_language" TEXT NOT NULL,
ADD COLUMN     "vision" TEXT NOT NULL,
ADD COLUMN     "writing_hours" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "QuizAttempt" ADD COLUMN     "device_browser" TEXT NOT NULL,
ADD COLUMN     "device_os" TEXT NOT NULL,
ADD COLUMN     "device_type" TEXT NOT NULL,
ADD COLUMN     "monitor_size" TEXT NOT NULL,
ADD COLUMN     "quiz_status" TEXT NOT NULL,
ADD COLUMN     "viewport_size" TEXT NOT NULL;
