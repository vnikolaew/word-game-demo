import type { Metadata } from "next";

import "./globals.css";

import { NuqsAdapter } from "nuqs/adapters/next/app";
import { Tajawal } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import Header from "@/components/view/Header";
import AuthProvider from "@/components/providers/AuthProvider";
import Footer from "@/components/view/Footer";
import CookieBanner from "@/components/view/CookieBanner";
import { APP_NAME } from "@/lib/consts";
import Head from "next/head";
import { getUserConsents } from "@/app/queries";

const tajawal = Tajawal({
   variable: "--font-arabic",
   weight: "400",
   subsets: ["arabic"],
   display: "swap",
});

export const metadata: Metadata = {
   title: "اختبار الكلمات",
   description: "اختبر معرفتك بالكلمات العربية",
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
      process.env.WEB_DOMAIN!
   ]
};

type RootLayoutProps = {
   children: React.ReactNode;
};

export default async function RootLayout({ children }: RootLayoutProps) {
   const userConsents = await getUserConsents()
   return (
       <html lang="ar" dir="rtl">
       <Head>
          <link
              href="https://unpkg.com/jspsych@8.2.1/css/jspsych.css"
              rel="stylesheet"
              type="text/css"
          />
       </Head>
       <body className={`${tajawal.className} antialiased mx-auto max-w-7xl`}>
       <AuthProvider>
          <Toaster/>
          <Header/>

          <NuqsAdapter>{children}</NuqsAdapter>
          <Footer/>
          {userConsents && (
              <CookieBanner consents={userConsents}/>
          )}
       </AuthProvider>
       </body>
       </html>
   );
}
