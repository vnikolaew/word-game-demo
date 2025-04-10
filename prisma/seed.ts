import { PrismaClient } from "@prisma/client";
import * as fs from "fs";
import * as path from "path";

const prisma = new PrismaClient();

async function main() {
  try {
    // Read the SQL file
    const sqlFile = path.join(__dirname, "seed.sql");
    const sql = fs.readFileSync(sqlFile, "utf8");

    // Execute the SQL
    await prisma.$executeRawUnsafe(sql);

    console.log("Database seeded successfully");
  } catch (error) {
    console.error("Error seeding database:", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
