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
