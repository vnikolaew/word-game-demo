import React, { useMemo } from "react";
import { Button } from "../ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";
import { AlertCircle } from "lucide-react";
import { motion } from "framer-motion";
import { QuizLimitInfo } from "@/app/quiz/hooks";

export interface QuizLimitViewProps {
   limitInfo: QuizLimitInfo;
}

function QuizLimitView({
   limitInfo: { message, tryAgainIn },
}: QuizLimitViewProps) {
   const formattedMessage = useMemo(() => {
      if (isNaN(tryAgainIn)) return message;
      if (message.includes(`{hours}`))
         return message.replaceAll(`{hours}`, tryAgainIn.toFixed(2));

      if (message.includes(`{minutes}`))
         return message.replaceAll(`{minutes}`, tryAgainIn.toFixed(2));
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
               className="text-lg text-red-500 inline-flex gap-2 items-center drop-shadow-sm"
            >
               <AlertCircle size={18} />
               <span className="">{formattedMessage}</span>
            </motion.p>
            <div className="flex justify-center pt-12">
               <Button className="w-full md:w-auto px-12">
                  انتقل إلى الصفحة الرئيسية
               </Button>
            </div>
         </CardContent>
      </Card>
   );
}

export default QuizLimitView;
