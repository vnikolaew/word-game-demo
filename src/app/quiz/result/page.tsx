import React from "react";
import ClientPage from "./client-page";
import { Metadata } from "next";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
   title: `النتيجة النهائية للاختبار`,
   description: `عرض النتيجة النهائية الخاصة بك من الاختبار الأخير`,
};

async function Page() {
   return <ClientPage />;
}

export default Page;
