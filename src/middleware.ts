import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('t');
  const { pathname } = request.nextUrl;

  if (accessToken && pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (!accessToken && !pathname.startsWith('/auth')) {
    return NextResponse.redirect(new URL('/auth/sign-in', request.url));
  }

  return NextResponse.next();
}

// Exclude
export const config = {
  matcher: ['/((?!_next|api|favicon.ico).*)'],
};
