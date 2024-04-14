import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { DEFAULT_LOCALE } from "next.config";

/**
 * Next.js Middleware
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 * @param request NextRequest
 * @returns
 */
export default async function middleware(request: NextRequest) {
  /**
   * Skips adding the default prefix to API Routes
   * and public files like fonts or images
   */
  if (
    request.nextUrl.pathname.startsWith("/_next") ||
    request.nextUrl.pathname.includes("/api/") ||
    /\.(.*)$/.test(request.nextUrl.pathname)
  ) {
    return NextResponse.next();
  }

  /**
   * If a request is made to the default locale, redirect to our prefix
   */
  if (request.nextUrl.locale === "default") {
    const locale = request.cookies.get("NEXT_LOCALE")?.value || DEFAULT_LOCALE;
    const nextUrl = new URL(`/${locale}${request.nextUrl.pathname}${request.nextUrl.search}`, request.url);
    return NextResponse.redirect(nextUrl);
  }

  return NextResponse.next();
}
