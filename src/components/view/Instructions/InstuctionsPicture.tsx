"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import React from "react";
import desktopImage from "@/../public/images/desktop_instruction_pic_ver2.png";
import mobileImage from "@/../public/images/phone_instruction_pic_ver2.png";
import Image from "next/image";

const IMAGE_SIZE = 400;

function InstuctionsPicture({ onClick }: { onClick: any }) {
   const isMobile = useMediaQuery("(max-width: 768px)");

   return (
      <Card className="w-full max-w-2xl mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-2xl"></CardTitle>
         </CardHeader>
         <CardContent className="space-y-6">
            <div className="w-full items-center justify-center flex flex-col gap-4">
               <p className="font-semibold text-xl">
                  استخدم هذه المفاتيح للإجابة
               </p>
               {isMobile ? (
                  <Image
                     loading="eager"
                     placeholder="blur"
                     height={64}
                     width={IMAGE_SIZE}
                     alt="instructions"
                     src={mobileImage}
                  />
               ) : (
                  <Image
                     placeholder="blur"
                     height={64}
                     width={IMAGE_SIZE}
                     alt="instructions"
                     src={desktopImage}
                  />
               )}
            </div>
            <div className="flex justify-center pt-12">
               <Button onClick={onClick} className="w-full md:w-auto !px-12">
                  ابدأ التدريب
               </Button>
            </div>
         </CardContent>
      </Card>
   );
}

export default InstuctionsPicture;
