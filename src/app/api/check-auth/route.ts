import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
  const cookieStore = cookies();

  const token = (await cookieStore).get('t')?.value;
  const refreshToken = (await cookieStore).get('rt')?.value;

  if (!token) {
    return NextResponse.json({
      success: false,
      message: 'User is unauthorized!',
    });
  }

  return NextResponse.json({
    success: true,
    message: 'User is authorized!',
    data: {
      rt: refreshToken,
    },
  });
}
