import React from "react";
import { main } from "../../../prisma/seed";

async function page() {
   await main();
   return <div>DB seeded.</div>;
}

export default page;
