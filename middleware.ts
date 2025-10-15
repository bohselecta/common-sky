import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const isAuth = Boolean(req.cookies.get("session")?.value);
  const protectedPaths = ["/dashboard", "/receipts"];
  const shouldProtect = protectedPaths.some(path => req.nextUrl.pathname.startsWith(path));
  if (shouldProtect && !isAuth) {
    const url = req.nextUrl.clone();
    url.pathname = "/register";
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = { matcher: ["/dashboard/:path*", "/receipts/:path*"] };
