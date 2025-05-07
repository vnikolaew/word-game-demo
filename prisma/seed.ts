import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import csvParser from "csv-parser";

const prisma = new PrismaClient();

interface WordData {
   item: string;
   item_type: string;
   frq: string;
   zipf: string;
   pos: string;
   lemma: string;
}

export async function main() {
   // Delete all existing data
   await prisma.word.deleteMany({});
   await prisma.wordList.deleteMany({});

   const include_all = false;
   const csv_ids = [
      21, 3, 178, 47, 115, 24, 196, 170, 151, 76, 192, 26, 101, 167, 34, 9, 54,
      61, 160, 38,
   ];

   // Create a word list for each CSV file
   const wordlistDir = path.join(process.cwd(), "wordlist");
   const files = fs
      .readdirSync(wordlistDir)
      .filter(
         (file: string) =>
            file.endsWith(".csv") &&
            (include_all
               ? true
               : csv_ids.some((id) => file === `sublist_${id}.csv`))
      );

   console.log(`Found ${files.length} CSV files`);

   for (const file of files) {
      const original_id = Number(file.split(`.`)[0].trim().split(`_`)[1]);

      // Create a new word list for this CSV file
      const wordList = await prisma.wordList.create({
         data: {
            timesUsed: 0,
            original_id,
         },
      });

      console.log(`Processing ${file} with original ID of ${original_id}`);

      // Read and process CSV file
      const results: WordData[] = [];
      await new Promise((resolve, reject) => {
         fs.createReadStream(path.join(wordlistDir, file))
            .pipe(csvParser())
            .on("data", (data: WordData) => results.push(data))
            .on("end", resolve)
            .on("error", reject);
      });

      // Verify we have the expected number of items
      const wordCount = results.filter((r) => r.item_type === "word").length;
      const nonwordCount = results.filter(
         (r) => r.item_type === "nonword"
      ).length;
      console.log(
         `Found ${wordCount} words and ${nonwordCount} nonwords in ${file}`
      );

      // Insert words from this sublist in batches
      const wordsToCreate = results
         .map((row) => {
            // Validate required fields
            if (!row.item) {
               console.warn(`Skipping row due to missing item`);
               return null;
            }

            return {
               word: row.item,
               isNonWord: row.item_type === "nonword",
               wordListId: wordList.id,
            };
         })
         .filter(Boolean);

      // Log the first item to verify structure
      console.log("Sample word data:", wordsToCreate[0]);

      if (wordsToCreate.length === 0) {
         console.warn(`No valid words found in ${file}`);
         continue;
      }

      try {
         await prisma.word.createMany({
            data: wordsToCreate as any,
         });
         console.log(
            `Successfully processed ${wordsToCreate.length} words from ${file}`
         );
      } catch (error) {
         console.error(`Error processing ${file}:`, error);
         throw error;
      }
   }

   console.log("Seeding complete!");
}

// main()
//    .catch((e) => {
//       console.error(e);
//       process.exit(1);
//    })
//    .finally(async () => {
//       await prisma.$disconnect();
//    });
