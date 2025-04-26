import { Metadata } from "next";
import LoginClient from "./LoginClient";

export const metadata: Metadata = {
   title: "تسجيل الدخول إلى التطبيق",
   description: "قم بتسجيل الدخول لبدء الاختبار",
};

export default async function LoginPage() {
   return <LoginClient />;
}
