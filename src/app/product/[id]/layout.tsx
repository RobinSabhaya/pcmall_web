import type { Metadata } from 'next';

import '../../globals.css';

export const metadata: Metadata = {
  title: 'PCMall',
  description: 'PCmall is an e-commerce platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
