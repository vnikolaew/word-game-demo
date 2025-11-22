import React from "react";
import University from "./University";
import { Metadata } from "next";
import { APP_NAME } from "@/lib/consts";

export const metadata: Metadata = {
   title: `إحصائيات الإدارة حسب الجامعة`,
   description: `عرض إحصائيات إدارية مفصلة حسب الجامعة`,
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
      `جامعة`
   ]
};

export const dynamic = "force-dynamic";

async function Page() {
   return <University/>;
}

export default Page;
