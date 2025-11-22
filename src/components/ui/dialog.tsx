"use client";

import * as React from "react";
import { XIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence, HTMLMotionProps } from "motion/react";

interface DialogContextType {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const DialogContext = React.createContext<DialogContextType | undefined>(
  undefined
);

function useDialog() {
  const context = React.useContext(DialogContext);
  if (!context) {
    throw new Error("Dialog components must be used within a Dialog");
  }
  return context;
}

function Dialog({
  children,
  open,
  onOpenChange,
  ...props
}: DialogContextType & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <DialogContext.Provider value={{ open, onOpenChange }}>
      <div {...props}>{children}</div>
    </DialogContext.Provider>
  );
}

function DialogTrigger({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useDialog();
  return (
    <button onClick={() => onOpenChange(true)} {...props}>
      {children}
    </button>
  );
}

function DialogPortal({ children }: { children: React.ReactNode }) {
  const { open } = useDialog();
  if (!open) return null;

  return <div className="fixed inset-0 z-50">{children}</div>;
}

function DialogClose({
  children,
  ...props
}: React.HTMLAttributes<HTMLButtonElement>) {
  const { onOpenChange } = useDialog();
  return (
    <button onClick={() => onOpenChange(false)} {...props}>
      {children}
    </button>
  );
}

function DialogOverlay({
  className,
  ...props
}: Omit<HTMLMotionProps<"div">, "children">) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className={cn("fixed inset-0 z-50 bg-black/50", className)}
      {...props}
    />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: Omit<HTMLMotionProps<"div">, "children"> & { children: React.ReactNode }) {
  return (
    <DialogPortal>
      <AnimatePresence>
        <DialogOverlay />
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{
            duration: 0.2,
            ease: "easeOut",
          }}
          className={cn(
            "fixed top-[50%] left-[50%] z-50 w-full max-w-lg translate-x-[-50%] translate-y-[-50%] rounded-lg border bg-white p-6 shadow-lg",
            className
          )}
          {...props}
        >
          {children}
          <DialogClose className="absolute top-4 right-4 rounded-sm opacity-70 hover:opacity-100">
            <XIcon className="h-4 w-4" />
            <span className="sr-only">Close</span>
          </DialogClose>
        </motion.div>
      </AnimatePresence>
    </DialogPortal>
  );
}

function DialogHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("flex flex-col gap-2 text-center sm:text-left", className)}
      {...props}
    />
  );
}

function DialogFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "flex flex-col-reverse gap-2 sm:flex-row sm:justify-end",
        className
      )}
      {...props}
    />
  );
}

function DialogTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h2
      className={cn("text-lg font-semibold leading-none", className)}
      {...props}
    />
  );
}

function DialogDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return <p className={cn("text-sm text-gray-500", className)} {...props} />;
}

export {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
  DialogTrigger,
};
