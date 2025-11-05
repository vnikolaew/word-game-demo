import {authOptions} from "@/lib/auth";
import {getServerSession} from "next-auth";
import {redirect} from "next/navigation";
import React from "react";
import AppPage from "./QuizPageClient";
import {Metadata} from "next";
import {getNewUserWordList} from "@/app/api/wordlists/route";
import {TOTAL_WORDS} from "@/app/test/hooks";
import _ from "lodash";
import {APP_NAME} from "@/lib/consts";

export const dynamic = "force-dynamic";

export const revalidate = 0

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

   const list = await getNewUserWordList()
   const shuffledWords = list?.shuffledWords ?? _.shuffle([
      ...list!.words,
      ...list!.nonWords,
   ]).slice(0, TOTAL_WORDS)

   return <AppPage shuffledWords={shuffledWords!} list={list!}/>;
}

export default Page;
