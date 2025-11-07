import { Inter, Raleway } from 'next/font/google';

import { Analytics } from '@vercel/analytics/next';
import { SpeedInsights } from '@vercel/speed-insights/next';
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
  title: { default: `${APP_NAME}`, template: `%s | ${APP_NAME}` },
  description: APP_DESC,
  metadataBase: new URL(`${BASE_URL}`),
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: APP_NAME,
    description: APP_DESC,
    url: BASE_URL,
    siteName: APP_NAME,
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/opengraph-image.jpg',
        width: 1200,
        height: 630,
        alt: APP_NAME,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: APP_NAME,
    description: APP_DESC,
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${raleway.variable}`}>
      {/* Google site verification*/}
      <meta
        name="google-site-verification"
        content="Dk1IfMfclIzJmxj3ER1CqJnwtt7zkRX9upntn8NeGIk"
      />
      <body>
        <ToasterProvider />
        <QueryProvider>{children}</QueryProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
