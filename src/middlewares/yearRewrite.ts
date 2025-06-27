import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function yearRewriteMiddleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only rewrite the root path
  if (pathname === "/") {
    const currentYear = new Date().getFullYear();
    const yearPath = `/${currentYear}`;
    const rewriteUrl = new URL(yearPath, request.url);
    return NextResponse.rewrite(rewriteUrl);
  }

  return null;
}
