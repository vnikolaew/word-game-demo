import type { Metadata } from "next";

import "./globals.css";

import { Tajawal } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/view/Header";
import AuthProvider from "@/components/providers/AuthProvider";
import Footer from "@/components/view/Footer";

const tajawal = Tajawal({
   variable: "--font-arabic",
   weight: "400",
   subsets: ["arabic"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "اختبار الكلمات",
   description: "اختبر معرفتك بالكلمات العربية",
};

type RootLayoutProps = {
   children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
   return (
      <html lang="ar" dir="rtl">
         <body className={`${tajawal.className} antialiased mx-auto max-w-7xl`}>
            <AuthProvider>
               <Toaster />
               <Header />

               {children}
               <Footer />
            </AuthProvider>
         </body>
      </html>
   );
}
