import { NextResponse, type NextRequest } from 'next/server';

import { shouldAuthenticatedRoutes } from './utils';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('t');
  const { pathname } = request.nextUrl;

  if (accessToken && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!accessToken && shouldAuthenticatedRoutes.includes(pathname)) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  return NextResponse.next();
}

// Exclude
export const config = {
  matcher: [
    '/((?!_next|api|favicon\\.ico|icon\\.ico|apple-icon\\.ico|open-graph-image|twitter-image|robots\\.txt|sitemap\\.xml).*)',
  ],
};
