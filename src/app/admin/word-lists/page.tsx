import { Metadata } from "next";
import WordLists from "./WordLists";

export const metadata: Metadata = {
   title: `إحصائيات الإدارة لقوائم الكلمات`,
   description: `عرض إحصائيات إدارية مفصلة لقوائم الكلمات`,
};

export const dynamic = "force-dynamic";

export default async function WordListsPage() {
   return <WordLists />;
}
