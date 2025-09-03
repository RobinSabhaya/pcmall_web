import type { Metadata } from 'next';

import Footer from '@/components/ui/Footer/Footer';
import Navbar from '@/components/ui/Header/Navbar/Navbar';
import '../globals.css';

export const metadata: Metadata = {
  title: 'PCMall',
  description: 'PCmall is an e-commerce platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
