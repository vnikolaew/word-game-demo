import React from "react";
import ClientPage from "./ClientPage";

export const dynamic = "force-dynamic";

async function page() {
   return <ClientPage />;
}

export default page;
