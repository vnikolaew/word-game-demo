import { __IS_PROD__ } from "@/lib/consts";
import { Metadata } from "next";
import React from "react";
import SurveyClient from "./SurveyClient";

export const metadata: Metadata = {
   title: `استطلاع رأي حول خلفية الاختبار`,
   description: `قم بإجراء استطلاع سريع للخلفية`,
};

async function Page() {
   return <SurveyClient />;
}

export default Page;
