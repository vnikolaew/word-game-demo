import React from "react";
import { main } from "@/../prisma/seed";

export const dynamic = "force-dynamic";

async function Page() {
   await main();
   return <div>DB seeded!</div>;
}

export default Page;
