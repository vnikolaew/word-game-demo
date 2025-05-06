import ResultsView from "@/components/view/ResultsView";
import React from "react";
import { getCurrentUser } from "../queries";
import { PROLIFIC_EMAIL_REGEX } from "@/lib/utils";

async function ClientPage() {
   const user = await getCurrentUser();
   const hasProlificEmail =
      user?.hasProlificEmail || PROLIFIC_EMAIL_REGEX.test(user?.email ?? ``);

   return (
      <div className="mx-auto py-12">
         <ResultsView hasProlificEmail={hasProlificEmail} />
      </div>
   );
}

export default ClientPage;
