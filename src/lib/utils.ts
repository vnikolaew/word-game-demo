import { type ClassValue, clsx } from "clsx";
import { createHash } from "crypto";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
   return twMerge(clsx(inputs));
}

// Function to generate a consistent anonymous ID for a user
export function generateAnonymousId(userId: string) {
   return createHash("sha256")
      .update(userId + process.env.NEXTAUTH_SECRET)
      .digest("hex")
      .slice(0, 8);
}

// Download a file in the browser
export async function downloadFile(file: string, blob: Blob) {
   const url = window.URL.createObjectURL(blob);
   const a = document.createElement("a");

   a.href = url;
   a.download = file;

   document.body.appendChild(a);
   a.click();

   window.URL.revokeObjectURL(url);
   document.body.removeChild(a);
}

export function hideHeaderAndFooter() {
   const elements = [`header`, `footer`];
   elements.forEach((e) => {
      const element = document.querySelector(e) as HTMLElement;
      element.style.visibility = `hidden`;
   });
}

export function showHeaderAndFooter() {
   const elements = [`header`, `footer`];
   elements.forEach((e) => {
      const element = document.querySelector(e) as HTMLElement;
      element.style.visibility = `visible`;
   });
}

export const HIGH_SCORE_THRESHOLD = 80
