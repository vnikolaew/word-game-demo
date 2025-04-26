import { Metadata } from "next";
import RegisterClient from "./RegisterClient";

export const metadata: Metadata = {
   title: `سجل للحصول على التطبيق`,
   description: `سجل لبدء الاختبار`,
};

export default async function RegisterPage() {
   return <RegisterClient />;
}
