"use client";

import React from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { User, LogOut, Settings, FlaskConical } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Components
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

// Jotai
import { cn } from "@/lib/utils";
import useHeader from "@/hooks/useHeader";
import { __IS_DEV__ } from "@/lib/consts";

const Header = () => {
   const { dropdownRef, isAdmin, session, isOpen, setIsOpen } = useHeader();

   return (
      <header className="bg-white z-10 shadow-sm rounded-full my-2 sticky top-2 border border-gray-200">
         <nav className="h-14 flex items-center justify-between px-4">
            <Link href="/" className="text-center flex items-center gap-2">
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
                           ابدأ الاختبار
                        </Button>
                     </Link>

                     <div ref={dropdownRef} className="relative">
                        <Button
                           variant="ghost"
                           size="sm"
                           className={cn(
                              "relative h-8 w-8 rounded-full cursor-pointer",
                              !session?.user?.image && `!w-24`
                           )}
                           onClick={() => setIsOpen(!isOpen)}
                        >
                           <Avatar
                              className={cn(
                                 session.user?.image ? "h-8 w-8" : `w-24`
                              )}
                           >
                              <AvatarImage
                                 src={session.user?.image || ""}
                                 alt={session.user?.name || ""}
                              />
                              <AvatarFallback className="!w-24">
                                 {/* {session.user?.name?.charAt(0) || (
                                    <User className="h-4 w-4" />
                                 )} */}
                                 الملف الشخصي
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
                                 className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white border border-gray-200"
                              >
                                 <div className="py-1">
                                    {Boolean(isAdmin) && (
                                       <Link
                                          href="/admin"
                                          className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                                          onClick={() => setIsOpen(false)}
                                       >
                                          <Settings className="h-4 w-4" />
                                          <span>الإدارة</span>
                                       </Link>
                                    )}

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
