import { Metadata } from "next";
import Reports from "./Reports";
import { APP_NAME } from "@/lib/consts";

export const metadata: Metadata = {
   title: `تقارير الإدارة`,
   description: `عرض تقارير الإدارة التفصيلية`,
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
      `تقرير`
   ]
};

export const dynamic = "force-dynamic";

export default async function ReportsPage() {
   return <Reports/>;
}
