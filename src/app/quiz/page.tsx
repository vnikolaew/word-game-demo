import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import React from "react";
import AppPage from "./QuizPageClient";
import { DemographicSurvey } from "@prisma/client";

export const dynamic = "force-dynamic";

async function Page() {
   const session = await getServerSession(authOptions);
   if (!session?.user?.id) {
      redirect(`/`);
   }

   const survey = await prisma.demographicSurvey.findUnique({
      select: { id: true, userId: true },
      where: {
         userId: session.user.id,
      },
   });

   return <AppPage survey={survey as DemographicSurvey} />;
}

export default Page;
