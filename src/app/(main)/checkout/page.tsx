import type { Metadata } from 'next';

import Checkout from '@/components/features/Checkout/Checkout/Checkout';

// SEO
export const metadata: Metadata = {
  title: 'Checkout',
};

export default function CheckoutPage() {
  return <Checkout />;
}
