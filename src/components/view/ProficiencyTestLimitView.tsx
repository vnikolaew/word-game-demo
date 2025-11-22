"use client";
import { QuizLimitInfo } from "@/app/quiz/hooks";
import { motion } from "motion/react";
import { AlertCircle } from "lucide-react";
import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import Link from "next/link";

export interface QuizLimitViewProps {
   limitInfo: QuizLimitInfo;
}

function ProficiencyTestLimitView({
   limitInfo: { message, tryAgainIn } = { message: ``, tryAgainIn: 10 },
}: QuizLimitViewProps) {
   const formattedMessage = useMemo(() => {
      const x_message = message;
      const x_tryAgainIn = tryAgainIn;

      if (isNaN(x_tryAgainIn)) return message;

      if (x_message.includes(`{hours}`))
         return x_message.replaceAll(`{hours}`, x_tryAgainIn.toFixed(0));

      if (x_message.includes(`{minutes}`))
         return x_message.replaceAll(`{minutes}`, x_tryAgainIn.toFixed(0));

      return x_message;
   }, [message, tryAgainIn]);

   return (
      <Card className="w-full max-w-2xl mx-auto">
         <CardHeader>
            <CardTitle className="text-center text-2xl inline-flex items-center justify-center gap-4  ">
               <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.2 }}
               >
                  تحذير! لقد تم تقييدك
               </motion.h2>
            </CardTitle>
         </CardHeader>
         <CardContent className="space-y-6 !text-red-500">
            <motion.p
               initial={{ opacity: 0, x: -20 }}
               animate={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.2, delay: 0.3 }}
               className="text-lg text-red-500 inline-flex gap-2 items-center drop-shadow-sm text-center w-full justify-center"
            >
               <AlertCircle size={18} />
               <span className="">{formattedMessage}</span>
            </motion.p>
            <div className="flex justify-center pt-8">
               <Link href={`/`}>
                  <Button className="w-full md:w-auto px-12">
                     انتقل إلى الصفحة الرئيسية
                  </Button>
               </Link>
            </div>
         </CardContent>
      </Card>
   );
}

export default ProficiencyTestLimitView;
