import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const isAdminRoute = req.nextUrl.pathname.startsWith("/admin");

  // simple protection (we will upgrade later to real auth)
  const adminToken = req.cookies.get("admin_token")?.value;

  if (isAdminRoute && adminToken !== "bhudevi_admin") {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};