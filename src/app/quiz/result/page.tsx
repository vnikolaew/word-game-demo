import React from "react";
import ClientPage from "./client-page";

export const dynamic = "force-dynamic";

async function Page() {
   return <ClientPage />;
}

export default Page;
