import {authOptions} from "@/lib/auth";
import {prisma} from "@/lib/prisma";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import React from "react";
import AppPage from "./QuizPageClient";
import {DemographicSurvey} from "@prisma/client";
import {Metadata} from "next";
import {getNewUserWordList} from "../api/wordlists/route";
import _ from "lodash";
import {APP_NAME} from "@/lib/consts";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
   title: `صفحة الاختبار`,
   description: `أكمل الاختبار`,
   applicationName: APP_NAME,
   creator: `Sara Fahad`,
   authors: [{
      name: `Sara Fahad`
   }],
   keywords: [
      `لغز`,
      `استبيان`,
      `استطلاع`,
      `الناطقة بالعربية`,
      `امتحان`,
      `كلمات`,
   ]
};

async function Page() {
   const session = await getServerSession(authOptions);
   if (!session?.user?.id) {
      redirect(`/`);
   }

   const survey = await prisma.demographicSurvey.findUnique({
      select: {id: true, userId: true},
      where: {
         userId: session.user.id,
      },
   });

   const list = await getNewUserWordList()
   const shuffledWords = list?.shuffledWords ?? _.shuffle([
      ...list!.words,
      ...list!.nonWords,
   ])

   return <AppPage list={list!} shuffledWords={shuffledWords!} survey={survey as DemographicSurvey}/>;
}

export default Page;
