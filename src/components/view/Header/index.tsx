"use client";

import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm rounded-full my-2 sticky top-2 border border-gray-200">
      <nav className="h-10 flex items-center justify-center">
        <Link href="/" className="text-center">
          <span className="text-xl font-bold">اختبار الكلمات</span>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
