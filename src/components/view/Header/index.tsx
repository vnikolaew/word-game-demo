"use client";

import { useSession, signOut } from "next-auth/react";
import Link from "next/link";
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import Logo from "../Logo";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User, LogOut } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

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
              <div ref={dropdownRef} className="relative">
                <Button
                  variant="ghost"
                  size="sm"
                  className="relative h-8 w-8 rounded-full cursor-pointer"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <Avatar className="h-8 w-8">
                    <AvatarImage
                      src={session.user?.image || ""}
                      alt={session.user?.name || ""}
                    />
                    <AvatarFallback>
                      {session.user?.name?.charAt(0) || (
                        <User className="h-4 w-4" />
                      )}
                    </AvatarFallback>
                  </Avatar>
                </Button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white border border-gray-200"
                    >
                      <div className="py-1">
                        <Link
                          href="/profile"
                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                          onClick={() => setIsOpen(false)}
                        >
                          <User className="h-4 w-4" />
                          <span>الملف الشخصي</span>
                        </Link>
                        <button
                          onClick={() => {
                            setIsOpen(false);
                            signOut({ callbackUrl: "/" });
                          }}
                          className="flex w-full items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-gray-100"
                        >
                          <LogOut className="h-4 w-4" />
                          <span>تسجيل الخروج</span>
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
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
