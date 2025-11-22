import { Metadata } from "next";
import { APP_NAME } from "@/lib/consts";
import Links from "@/app/admin/links";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/Spinner";

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
      `مسؤل`
   ]
};

export const dynamic = 'force-dynamic'

export default async function AdminLayout({
                                             children,
                                          }: {
   children: React.ReactNode;
}) {
   return (
       <div className="flex h-screen mt-12">
          {/* Sidebar */}
          <div className="sticky top-0 w-64 bg-gray-700 text-white rounded-lg shadow-md">
             <div className="h-16 flex items-center px-6">
                <h1 className="text-xl font-bold">لوحة معلومات الإدارة</h1>
             </div>
             <Links/>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
             <Suspense fallback={<div>
                <Spinner size={`lg`}/>
             </div>}>
                <div className="p-8">{children}</div>
             </Suspense>
          </div>
       </div>
   );
}
