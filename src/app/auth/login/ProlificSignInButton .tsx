import React from "react";
import Link from "next/link";
import prolificLogo from "@/../public/prolific-logo-full.png";
import Image from "next/image";

export interface ProlificSignInButtonProps {}

const ProlificSignInButton = ({}: ProlificSignInButtonProps) => {
   return (
      <Link className={`w-full`} href={`/auth/login/prolific`}>
         <button
            title={``}
            className={`mt-2  !bg-[#003eabff] hover:!opacity-90 text-neutral-200 text-sm gap-4 !py-1.5 !px-12 rounded-full !shadow-md !duration-100 !w-full inline-flex items-center cursor-pointer justify-center`}
         >
            <Image
               alt={`Prolific Logo`}
               className={`w-6 h-6`}
               src={prolificLogo}
            />
            <span>{`تسجيل الدخول عبر Prolific`}</span>
         </button>
      </Link>
   );
};

export default ProlificSignInButton;
