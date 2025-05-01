import NextAuth from "next-auth";

declare module "next-auth" {
   interface Session {
      user: {
         id: string;
         email?: string | null;
         name?: string | null;
         image?: string | null;
      };
   }
}

declare global {
   interface Window {
      initJsPsych: (data: any) => void;
   }
}
