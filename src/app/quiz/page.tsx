import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import AppPage from "./QuizPageClient";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
   title: `صفحة الاختبار`,
   description: `أكمل الاختبار`,
};

async function Page() {
   const session = await getServerSession(authOptions);
   if (!session?.user?.id) {
      redirect(`/`);
   }

   return <AppPage />;
}

export default Page;
