import { Metadata } from "next";
import UserProfile from "@/components/view/UserProfile";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
   title: `الملف الشخصي | التعرف على الكلمات العربية`,
   description: `عرض وإدارة ملفك الشخصي`,
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


      `حساب تعريفي`
   ]
};

export const dynamic = "force-dynamic";

export default async function ProfilePage() {
   const session = await getServerSession(authOptions);
   if (!session?.user?.id) {
      redirect(`/`);
   }

   return <UserProfile />;
}
