"use client";
import React, { ComponentProps, useId } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";
import { AlertCircle } from "lucide-react";

export interface ErrorMessageProps extends ComponentProps<"div"> {
   error?: string;
}

const ErrorMessage = ({ error, className, ...props }: ErrorMessageProps) => {
   const id = useId();

   return (
      <AnimatePresence>
         <motion.div
            key={`error-${id}`}
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 10 }}
            transition={{ duration: 0.3 }}
            className={cn(
               `w-full flex opacity-0 gap-2 items-center text-red-500 mt-2 drop-shadow-sm !transition-opacity duration-300`,
               !!error?.length && `opacity-100`,
               className
            )}
            {...props}
         >
            <AlertCircle
               className={cn(
                  `opacity-0 !min-w-4`,
                  !!error?.length && `opacity-100`
               )}
               size={18}
            />
            <span className="drop-shadow-sm">{error ?? ``}</span>
         </motion.div>
      </AnimatePresence>
   );
};

export default ErrorMessage;
