/*
  Warnings:

  - You are about to drop the column `userId` on the `DemographicSurvey` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `UserConsent` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[user_id]` on the table `DemographicSurvey` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[user_id]` on the table `UserConsent` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `user_id` to the `DemographicSurvey` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `UserConsent` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wordOrder` to the `UserWordList` table without a default value. This is not possible if the table is not empty.
  - Added the required column `orderInList` to the `Word` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sublistId` to the `Word` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "DemographicSurvey" DROP CONSTRAINT "DemographicSurvey_userId_fkey";

-- DropForeignKey
ALTER TABLE "UserConsent" DROP CONSTRAINT "UserConsent_userId_fkey";

-- AlterTable
ALTER TABLE "DemographicSurvey" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserConsent" DROP COLUMN "userId",
ADD COLUMN     "user_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserWordList" ADD COLUMN     "wordOrder" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "Word" ADD COLUMN     "frequency" DOUBLE PRECISION,
ADD COLUMN     "orderInList" INTEGER NOT NULL,
ADD COLUMN     "rank" INTEGER,
ADD COLUMN     "root" TEXT,
ADD COLUMN     "sublistId" TEXT NOT NULL,
ADD COLUMN     "type" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "DemographicSurvey_user_id_key" ON "DemographicSurvey"("user_id");

-- CreateIndex
CREATE UNIQUE INDEX "UserConsent_user_id_key" ON "UserConsent"("user_id");

-- CreateIndex
CREATE INDEX "Word_sublistId_idx" ON "Word"("sublistId");

-- AddForeignKey
ALTER TABLE "DemographicSurvey" ADD CONSTRAINT "DemographicSurvey_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserConsent" ADD CONSTRAINT "UserConsent_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
