import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

/**
 * Next.js Middleware
 *
 * @see https://nextjs.org/docs/app/building-your-application/routing/middleware
 * @param request NextRequest
 * @returns
 */
export default async function middleware(request: NextRequest) {
  return NextResponse.next();
}
