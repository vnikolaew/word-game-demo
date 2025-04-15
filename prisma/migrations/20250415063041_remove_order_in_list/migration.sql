/*
  Warnings:

  - You are about to drop the column `frequency` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `orderInList` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `rank` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `root` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `sublistId` on the `Word` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `Word` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Word_sublistId_idx";

-- AlterTable
ALTER TABLE "Word" DROP COLUMN "frequency",
DROP COLUMN "orderInList",
DROP COLUMN "rank",
DROP COLUMN "root",
DROP COLUMN "sublistId",
DROP COLUMN "type";
