import type { Metadata } from 'next';

import ProductDetails from '@/components/features/Product/ProductDetails/ProductDetails';

import type { PageProps } from './page.type';

// SEO
export const metadata: Metadata = {
  title: 'Product',
};

export default async function ProductPage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const { id } = await params;
  return <ProductDetails productId={id} />;
}
