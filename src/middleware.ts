import { NextResponse, type NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const accessToken = request.cookies.get('t');

  if (request.nextUrl.pathname.startsWith('/auth')) {
    if (accessToken) {
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  return NextResponse.next();
}
