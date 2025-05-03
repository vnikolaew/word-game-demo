import ResultsView from "@/components/view/ResultsView";
import React from "react";
import { getCurrentUser } from "../queries";

async function ClientPage() {
   const user = await getCurrentUser();
   const hasProlificEmail = user?.hasProlificEmail ?? false;

   return (
      <div className="mx-auto py-12">
         <ResultsView hasProlificEmail={hasProlificEmail} />
      </div>
   );
}

export default ClientPage;
