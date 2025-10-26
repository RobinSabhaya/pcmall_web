import type { Metadata } from 'next';

import { Cart } from '../../../components/features/Cart';

// SEO
export const metadata: Metadata = {
  title: 'Cart',
};

export default function CartPage() {
  return <Cart />;
}
