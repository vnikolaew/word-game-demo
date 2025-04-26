import { Metadata } from "next";
import UserProfile from "@/components/view/UserProfile";

export const metadata: Metadata = {
   title: `الملف الشخصي | التعرف على الكلمات العربية`,
   description: `عرض وإدارة ملفك الشخصي`,
};

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
   return <UserProfile />;
}
