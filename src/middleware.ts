import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getToken } from "next-auth/jwt";
import { withAuth } from "next-auth/middleware";

export async function middleware(request: NextRequest) {
  const token = await getToken({ req: request });

  // Check if the path starts with /quiz
  if (request.nextUrl.pathname.startsWith("/quiz")) {
    if (!token) {
      // Redirect to login page if not authenticated
      const loginUrl = new URL("/auth/login", request.url);
      loginUrl.searchParams.set("callbackUrl", request.nextUrl.pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  // Prevent authenticated users from accessing login page
  if (request.nextUrl.pathname.startsWith("/auth/login")) {
    if (token) {
      // Redirect to quiz page if already authenticated
      return NextResponse.redirect(new URL("/quiz", request.url));
    }
  }

  return NextResponse.next();
}

export default withAuth({
  callbacks: {
    authorized: ({ token }) => !!token,
  },
});

// Configure the paths that middleware should run on
export const config = {
  matcher: [
    "/quiz/:path*", // Match all paths starting with /quiz
    "/auth/login", // Match the login page
    "/profile",
    "/api/profile",
  ],
};
