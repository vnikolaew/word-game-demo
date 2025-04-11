import type { Metadata } from "next";

import "./globals.css";

import { Noto_Kufi_Arabic } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/view/Header";
import AuthProvider from "@/components/providers/AuthProvider";

const notoSansArabic = Noto_Kufi_Arabic({
  variable: "--font-arabic",
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
      <body
        className={`${notoSansArabic.className} antialiased mx-auto max-w-3xl`}
      >
        <AuthProvider>
          <Toaster />
          <Header />

          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
