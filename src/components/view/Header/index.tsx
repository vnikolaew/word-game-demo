"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";

const Header = () => {
  const { data: session } = useSession();

  return (
    <header className="bg-white shadow-sm rounded-full my-2 sticky top-2 border border-gray-200">
      <nav className="h-14 flex items-center justify-between px-4">
        <Link href="/" className="text-center flex items-center gap-2">
          <Logo />
          <span className="text-xl font-bold">اختبار الكلمات</span>
        </Link>

        <div className="flex items-center gap-2">
          <Link href="/about">
            <Button variant="ghost" size="sm">
              من نحن
            </Button>
          </Link>
          {session ? (
            <>
              <Link href="/quiz">
                <Button variant="outline" size="sm">
                  اختبار
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => signOut({ callbackUrl: "/" })}
              >
                تسجيل الخروج
              </Button>
            </>
          ) : (
            <Link href="/auth/login">
              <Button variant="outline" size="sm">
                تسجيل الدخول
              </Button>
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
