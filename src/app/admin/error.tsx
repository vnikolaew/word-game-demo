"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React, { useEffect } from "react";

export default function AdminError({
                                      error,
                                      reset,
                                   }: {
   error: Error & { digest?: string };
   reset: () => void;
}) {
   useEffect(() => {
      // Log the error to an error reporting service
      console.error(error);
   }, [error]);

   return (
       <section className="w-full flex flex-col items-center justify-center gap-8 mt-12 min-h-[60vh]">
          <h2 className="text-2xl font-bold">عذراً، حدث خطأ في النظام الإداري</h2>
          <p className="text-muted-foreground">
             نعتذر عن الإزعاج، يرجى المحاولة مرة أخرى أو العودة للوحة التحكم.
          </p>
          <div className="flex gap-4">
             <Button
                 onClick={
                    // Attempt to recover by trying to re-render the segment
                    () => reset()
                 }
                 variant="outline"
             >
                حاول مرة أخرى
             </Button>
             <Link href="/admin">
                <Button className="!px-12" variant="default">
                   العودة إلى لوحة التحكم
                </Button>
             </Link>
          </div>
       </section>
   );
}
