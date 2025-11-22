import {Metadata} from "next";
import LoginClient from "./LoginClient";
import {APP_NAME} from "@/lib/consts";

export const metadata: Metadata = {
   title: "تسجيل الدخول إلى التطبيق",
   description: "قم بتسجيل الدخول لبدء الاختبار",
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
      `تسجيل الدخول`
   ]
};

export default async function LoginPage() {
   return <LoginClient/>;
}
