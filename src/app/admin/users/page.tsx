import { Metadata } from "next";
import Users from "./Users";
import { APP_NAME } from "@/lib/consts";

export const metadata: Metadata = {
   title: ` إحصائيات الإدارة للمستخدمين`,
   description: `عرض إحصائيات الإدارة التفصيلية للمستخدمين`,
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
      `المستخدمين`
   ]
};

export const dynamic = "force-dynamic";

export default async function UsersPage() {
   return <Users />;
}
