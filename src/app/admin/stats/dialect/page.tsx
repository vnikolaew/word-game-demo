import { Metadata } from "next";
import Dialect from "./Dialect";
import { APP_NAME } from "@/lib/consts";

export const metadata: Metadata = {
   title: `إحصائيات الإدارة حسب اللهجة`,
   description: `عرض إحصائيات الإدارة التفصيلية حسب اللهجة`,
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
       `اللهجة`
   ]
};

export const dynamic = "force-dynamic";

async function Page() {
   return <Dialect />;
}

export default Page;
