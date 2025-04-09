import type { Metadata } from "next";

import "./globals.css";

import { Noto_Sans_Arabic } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/view/Header";

const notoSansArabic = Noto_Sans_Arabic({
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
        <Toaster />
        <Header />

        {children}
      </body>
    </html>
  );
}
