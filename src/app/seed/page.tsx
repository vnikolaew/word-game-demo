import React from "react";
import { main } from "../../../prisma/seed";

async function Page() {
   await main();
   return <div>Seeded database.</div>;
}

export default Page;
