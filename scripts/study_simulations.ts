import {prisma} from "@/lib/prisma";
import fs from "fs";

export const TOTAL_WORDS = 100;

// Function to convert array to CSV
function arrayToCSV<T extends Record<string, any>>(data: T[]) {
   if (data.length === 0) return "";

   const headers = Object.keys(data[0]);
   const rows = [
      headers.join(","),
      ...data.map((row) =>
          headers
              .map((header) => {
                 const value = row[header];
                 // Handle arrays, nulls, and escape commas
                 if (Array.isArray(value)) return `"${value.join(";")}"`;
                 if (value === null) return "";
                 if (typeof value === "string" && value.includes(","))
                    return `"${value}"`;
                 return value;
              })
              .join(",")
      ),
   ];

   return rows.join("\n");
}

interface WordList {
   id: string;
   words: string[];
   nonWords: string[];
   timesUsed: number;
}

const getNewWordList = async (index: number) => {
   try {
      const wordLists = await prisma.wordList.findMany({
         take: 100,
         include: {
            words: true,
         },
      })
      const word_list = wordLists[index]

      return {
         words: word_list.words.filter(w => !w.isNonWord).map(w => w.word),
         nonWords: word_list.words.filter(w => w.isNonWord).map(w => w.word),
         id: word_list.original_id.toFixed(),
         timesUsed: word_list.timesUsed!,
      } as WordList
   } catch (err) {
      return null!
   }
}

const shuffleArray = (array: string[]) => {
   const shuffled = [...array];
   for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
   }
   return shuffled;
};

async function getRandomizedWordList(index: number) {
   const currentList: WordList = await getNewWordList(index);
   if (!currentList) return {currentList: null!, selectedWords: []}

   const selectedWords = shuffleArray([
      ...currentList.words,
      ...currentList.nonWords,
   ]).slice(0, TOTAL_WORDS);

   return {currentList, selectedWords}
}

type UserResponse = 'LEFT_ARROW' | 'RIGHT_ARROW'

export function generateUserResponse(currentList: WordList, selectedWords: string[], word_index: number, predetermined_response?: UserResponse) {
   const response = predetermined_response
       ? (predetermined_response === `LEFT_ARROW` ? 0 : 1)
       : Math.random() > 0.5 ? 0 : 1;

   const is_word = currentList.words.includes(selectedWords[word_index]);
   const correct = response === (is_word ? 0 : 1);
   const response_time = .5 + (Math.random() * Math.random()) * (5 - .5)

   return {
      word: selectedWords[word_index],
      response,
      isCorrect: correct,
      isNonWord: !is_word,
      isTimeout: false,
      pageNumber: word_index + 1,
      responseTime: response_time,
      responseType: "keyboard"
   }
}

export async function runScenarioOne(index = 0) {
   const {selectedWords, currentList} = await getRandomizedWordList(index)
   if (!currentList) return {responses: [], currentList: null!}

   const responses = []
   for (let index = 0; index < TOTAL_WORDS; index++) {
      const response = generateUserResponse(currentList, selectedWords, index, `RIGHT_ARROW`)
      responses.push(response)
   }

   return {responses, currentList}
}

export async function runScenarioTwo(index:number) {
   const {selectedWords, currentList} = await getRandomizedWordList(index)
   if (!currentList) return { responses: [], currentList: null! }

   const responses = []
   for (let index = 0; index < TOTAL_WORDS; index++) {
      const response = generateUserResponse(currentList, selectedWords, index, `LEFT_ARROW`)
      responses.push(response)
   }

   return { responses, currentList }
}

export async function runScenarioThree(index: number) {
   const {selectedWords, currentList} = await getRandomizedWordList(index)
   if (!currentList) return { responses: [], currentList: null! }

   const responses = []
   for (let index = 0; index < TOTAL_WORDS; index++) {
      const response = generateUserResponse(currentList, selectedWords, index, index < 50 ? `RIGHT_ARROW` : `LEFT_ARROW`)
      responses.push(response)
   }

   return { responses, currentList }
}

export async function runScenarioFour(index: number) {
   const {selectedWords, currentList} = await getRandomizedWordList(index)
   if (!currentList) return { responses: [], currentList: null! }

   const responses = []
   for (let index = 0; index < TOTAL_WORDS; index++) {
      const response = generateUserResponse(currentList, selectedWords, index, index < 50 ? `LEFT_ARROW` : `RIGHT_ARROW`)
      responses.push(response)
   }

   return { responses, currentList }
}

export async function main() {
   const SIMULATION_COUNT = 100
   const csv_rows: any[] = []

   for (let i = 0; i < SIMULATION_COUNT; i++) {
      const {currentList, responses} = await runScenarioOne(i)
      const score = responses.filter(r => r.isCorrect).length

      csv_rows.push(
          ...responses.map(response => responseToCSVRow(response, currentList, i, 1, score))
      )
   }

   for (let i = 0; i < SIMULATION_COUNT; i++) {
      const {currentList, responses} = await runScenarioTwo(i)
      const score = responses.filter(r => r.isCorrect).length

      csv_rows.push(
          ...responses.map(response => responseToCSVRow(response, currentList, i, 2, score))
      )
   }

   for (let i = 0; i < SIMULATION_COUNT; i++) {
      const {currentList, responses} = await runScenarioThree(i)
      const score = responses.filter(r => r.isCorrect).length

      csv_rows.push(
          ...responses.map(response => responseToCSVRow(response, currentList, i, 3, score))
      )
   }

   for (let i = 0; i < SIMULATION_COUNT; i++) {
      const {currentList, responses} = await runScenarioFour(i)
      const score = responses.filter(r => r.isCorrect).length
      csv_rows.push(
          ...responses.map(response => responseToCSVRow(response, currentList, i, 4,score))
      )
   }

   fs.writeFileSync(`study_simulations.csv`, arrayToCSV(csv_rows), {
      encoding: 'utf-8',flag: `w`
   })
}



function responseToCSVRow(response: any, currentList: WordList, i: number, type: number, score: number) {
   return {
      'Simulaton Type' : type,
      'Word List ID' : currentList.id,
      'Simulaton Index' : i + 1,
      'Word' : response.word,
      'User Response' : response.response,
      'Correct' : response.isCorrect ? 1 : 0,
      'Page Number' : response.pageNumber,
      'Quiz Score' : score,
      'Response Time' : `${(response.responseTime * 1000).toFixed(0)}ms`,
      'Response Type' : response.responseType,
      'Answer' : response.isNonWord ? "nonword" : "word",
   }

}
main().catch(console.error);