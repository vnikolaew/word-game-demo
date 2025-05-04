import { Spinner } from "@/components/ui/Spinner";
import React, { PropsWithChildren, Suspense } from "react";

async function Layout({ children }: PropsWithChildren) {
   return (
      <section className="w-full mt-12">
         <Suspense
            fallback={
               <div>
                  <Spinner className="animate-spin" />
               </div>
            }
         >
            {children}
         </Suspense>
      </section>
   );
}

export default Layout;
