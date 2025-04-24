import Image from "next/image";
import React from "react";
import logo from "@/../public/logo.png";
import Link from "next/link";

const IMAGE_SIZE = 48;

function Footer() {
   return (
      <footer className="mt-24 w-full bg-white z-10 shadow-sm rounded-full my-2 sticky top-2 border border-gray-200">
         <div className="!py-2 flex flex-col items-center justify-center px-4">
            <Link href={`/`}>
               <Image
                  height={IMAGE_SIZE}
                  width={IMAGE_SIZE}
                  alt="logo"
                  src={logo}
               />
            </Link>
            <div className="text-center !mb-2">
               <p className="drop-shadow-sm">
                  © <b>{new Date().getFullYear()}</b> اختبار القراءة. جميع
                  الحقوق محفوظة.
               </p>
            </div>
         </div>
      </footer>
   );
}

export default Footer;
