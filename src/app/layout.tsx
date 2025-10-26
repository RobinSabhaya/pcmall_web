import { Inter, Raleway } from 'next/font/google';

import type { Metadata } from 'next';
import './globals.css';

import { APP_DESC, APP_NAME, BASE_URL } from '../config';
import ToasterProvider from '../lib/ToasterProvider';
import { QueryProvider } from '../providers/queryProvider';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: { default: APP_NAME!, template: `%s | ${APP_NAME!}` },
  description: APP_DESC,
  metadataBase: new URL(BASE_URL!),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      <body>
        <ToasterProvider />
        <QueryProvider>{children}</QueryProvider>
      </body>
    </html>
  );
}
