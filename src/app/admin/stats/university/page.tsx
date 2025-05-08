import React from "react";
import University from "./University";
import { Metadata } from "next";

export const metadata: Metadata = {
   title: `إحصائيات الإدارة حسب الجامعة`,
   description: `عرض إحصائيات إدارية مفصلة حسب الجامعة`,
};

export const dynamic = "force-dynamic";

async function Page() {
   return <University />;
}

export default Page;
