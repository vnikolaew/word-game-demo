import { Metadata } from "next";
import WordLists from "./WordLists";
import { APP_NAME } from "@/lib/consts";

export const metadata: Metadata = {
   title: `إحصائيات الإدارة لقوائم الكلمات`,
   description: `عرض إحصائيات إدارية مفصلة لقوائم الكلمات`,
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
      `إحصائيات`,
      `قوائم الكلمات`
   ]
};

export const dynamic = "force-dynamic";

export default async function WordListsPage() {
   return <WordLists/>;
}
