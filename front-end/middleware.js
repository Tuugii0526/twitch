import { NextResponse } from "next/server";
import { getLocale } from "./lib/middleware/getLocale";

const locales = ["en-US", "mn"];
const defaultLocale = ["en-US"];
export function middleware(request) {
  // const acceptLanguage = request.headers.get('accept-language');
  const { pathname } = request.nextUrl;
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );
  if (pathnameHasLocale) return;
  const localLanguage = getLocale(
    request,
    locales,
    defaultLocale
  );

  request.nextUrl.pathname = `/${localLanguage}${pathname}`;
  return NextResponse.redirect(request.nextUrl);
}
export const config = {
  matcher: ["/((?!.next|favicon.ico|public).*)"],
};
