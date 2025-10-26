import Footer from '@/components/ui/Footer/Footer';
import Navbar from '@/components/ui/Header/Navbar/Navbar';
import '../globals.css';

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
