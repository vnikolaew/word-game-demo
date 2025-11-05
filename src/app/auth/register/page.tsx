import { Metadata } from "next";
import RegisterClient from "./RegisterClient";
import {APP_NAME} from "@/lib/consts";

export const metadata: Metadata = {
   title: `سجل للحصول على التطبيق`,
   description: `سجل لبدء الاختبار`,
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
      `تسجيل الدخول`,
      `يسجل`
   ]
};

export default async function RegisterPage() {
   return <RegisterClient />;
}
