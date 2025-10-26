import type { Metadata } from 'next';

import Contact from '@/components/features/Contact/ContactInfo/Contact';

// SEO
export const metadata: Metadata = {
  title: 'Contact',
};

export default function AccountPage() {
  return <Contact />;
}
