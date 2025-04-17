/*
  Warnings:

  - Added the required column `total_quiz_duration` to the `QuizAttempt` table without a default value. This is not possible if the table is not empty.

*/
-- First add the column with a temporary default value
ALTER TABLE "QuizAttempt" ADD COLUMN "total_quiz_duration" INTEGER;

-- Update existing records: set total_quiz_duration to npxionTime plus some buffer for inter-stimulus intervals
-- Adding 200ms (feedback duration) + 100ms (processing time) per response = ~300ms per response
-- For 100 words, that's about 30000ms (30 seconds) of overhead
UPDATE "QuizAttempt" SET "total_quiz_duration" = "completion_time" + 30000;

-- Now make the column NOT NULL
ALTER TABLE "QuizAttempt" ALTER COLUMN "total_quiz_duration" SET NOT NULL;
