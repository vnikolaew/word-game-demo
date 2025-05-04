import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Page() {
   return (
      <section className="w-full flex flex-col items-center justify-center gap-8 mt-12 min-h-[60vh]">
         <h2 className="text-2xl">لم يتم العثور على الصفحة التي تبحث عنها</h2>
         <Link href={`/`}>
            <Button className="!px-12" variant={`default`}>
               العودة إلى الصفحة الرئيسية
            </Button>
         </Link>
      </section>
   );
}

export default Page;
