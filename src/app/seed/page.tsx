import React from "react";
import { main } from "@/../prisma/seed";
import { notFound } from "next/navigation";

export const dynamic = "force-dynamic";

async function Page() {
   await main();
   return notFound()
   return <div>DB seeded!</div>;
}

export default Page;
