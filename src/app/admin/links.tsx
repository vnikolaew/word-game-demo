"use client"
import React from 'react';
import {BookType, Database, FileText, LayoutDashboard, School, Users} from "lucide-react";
import {usePathname} from "next/navigation";
import Link from 'next/link';
import { cn } from '@/lib/utils';

export interface LinksProps {
}

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

const Links = ({}: LinksProps) => {
   const pathname = usePathname()

   return (
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
                    <item.icon className="h-5 w-5" />
                    {item.name}
                 </Link>
             );
          })}
       </nav>
   );
};

export default Links;