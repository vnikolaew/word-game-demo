-- AlterTable
ALTER TABLE "DemographicSurvey" ADD COLUMN     "university" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "password" DROP NOT NULL;
