"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
   LayoutDashboard,
   Users,
   FileText,
   Database,
   BookType,
   School,
} from "lucide-react";
import { Suspense } from "react";
import { Spinner } from "@/components/ui/Spinner";

const navigation = [
   { name: "لوحة القيادة", href: "/admin", icon: LayoutDashboard },
   { name: "المستخدمون", href: "/admin/users", icon: Users },
   { name: "قوائم الكلمات", href: "/admin/word-lists", icon: Database },
   { name: "التقارير", href: "/admin/reports", icon: FileText },
   {
      name: "إحصائيات حسب اللهجة",
      href: "/admin/stats/dialect",
      icon: BookType,
   },
   {
      name: "إحصائيات حسب الجامعة",
      href: "/admin/stats/university",
      icon: School,
   },
];

export default function AdminLayout({
                                       children,
                                    }: {
   children: React.ReactNode;
}) {
   const pathname = usePathname();

   return (
       <div className="flex h-screen mt-12">
          {/* Sidebar */}
          <div className="sticky top-0 w-64 bg-gray-700 text-white rounded-lg shadow-md">
             <div className="h-16 flex items-center px-6">
                <h1 className="text-xl font-bold">لوحة معلومات الإدارة</h1>
             </div>
             <nav className="mt-6">
                {navigation.map((item) => {
                   const isActive = pathname === item.href;
                   return (
                       <Link
                           key={item.name}
                           href={item.href}
                           className={cn(
                               "flex items-center gap-3 px-6 py-3 text-sm font-medium",
                               isActive
                                   ? "bg-gray-800 text-white"
                                   : "text-gray-300 hover:bg-gray-800 hover:text-white"
                           )}
                       >
                          <item.icon className="h-5 w-5"/>
                          {item.name}
                       </Link>
                   );
                })}
             </nav>
          </div>

          {/* Main content */}
          <div className="flex-1 overflow-auto">
             <div className="p-8">
                <Suspense fallback={<div>
                   <Spinner size={`lg`}/>
                </div>}>
                   {children}
                </Suspense>
             </div>
          </div>
       </div>
   );
}
