"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";
import { useState } from "react";
import { User } from "lucide-react";
import { signOut } from "next-auth/react";

type RootLayoutProps = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: RootLayoutProps) {
  const router = useRouter();

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = async () => {
    await signOut();
    router.push("/");
  };

  return (
    <div dir="rtl" className="min-h-screen font-[var(--font-arabic)] max-w-3xl">
      <header className="bg-white shadow-sm rounded-full my-2 sticky top-2 border border-gray-200">
        <nav className="max-w-7xl mx-auto px-4 h-10 flex items-center justify-between">
          <Link href="/">
            <span className="text-xl font-bold">اختبار الكلمات</span>
          </Link>
          {/* <div className="flex items-center space-x-reverse space-x-4">
            {user ? (
              <div className="relative">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 hover:bg-gray-100 rounded-full"
                >
                  <User className="h-5 w-5" />
                </button>
                {isMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 border border-gray-200">
                    <Link
                      href="/profile"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      الملف الشخصي
                    </Link>
                    <button
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="block w-full text-right px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      تسجيل الخروج
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Link href="/auth/login">
                <button className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900">
                  تسجيل الدخول
                </button>
              </Link>
            )}
          </div> */}
        </nav>
      </header>
      <main className="p-4">{children}</main>
    </div>
  );
}
