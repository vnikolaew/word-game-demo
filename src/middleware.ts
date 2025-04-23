import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(request: NextRequest) {
   const token = await getToken({
      req: request,
      secret: process.env.NEXTAUTH_SECRET,
   });

   // Handle API routes
   if (request.nextUrl.pathname.startsWith("/api/")) {
      if (!token) {
         return new NextResponse(
            JSON.stringify({ error: "Authentication required" }),
            { status: 401, headers: { "content-type": "application/json" } }
         );
      }
      return NextResponse.next();
   }

   // Handle admin routes
   if (request.nextUrl.pathname.startsWith("/admin")) {
      if (!token) {
         const loginUrl = new URL("/auth/login", request.url);
         loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
         return NextResponse.redirect(loginUrl);
      }
   }

   // Handle /quiz routes
   if (request.nextUrl.pathname.startsWith("/quiz")) {
      if (!token) {
         const loginUrl = new URL("/auth/login", request.url);
         loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
         return NextResponse.redirect(loginUrl);
      }
   }

   // Handle /auth/login route
   if (request.nextUrl.pathname.startsWith("/auth/login")) {
      if (token) {
         return NextResponse.redirect(new URL("/quiz", request.url));
      }
   }

   return NextResponse.next();
}

// Configure the paths that middleware should run on
export const config = {
   matcher: [
      "/quiz/:path*",
      "/auth/login",
      "/profile",
      "/admin/:path*",
      "/api/(profile|wordlists|quiz|consent)/:path*", // Match all protected API routes
   ],
};
