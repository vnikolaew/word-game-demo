import type { Metadata } from "next";

import { Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/sonner";

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
        className={`${notoSansArabic.variable} antialiased mx-auto max-w-3xl`}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
