import type { Metadata, ResolvingMetadata } from 'next';

import ProductDetails from '@/components/features/Product/ProductDetails/ProductDetails';

import { API_URL } from '../../../../config';

import type { PageProps } from './page.type';

// SEO
export async function generateMetadata(
  { params }: { params: Promise<PageProps> },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  
  // fetch data
  const productData = await fetch(`${API_URL}product/all?slug=${slug}`).then(
    res => res.json()
  );

  const product = productData.data.productData.results;

  const previousImages = (await parent).openGraph?.images ?? [];

  return {
    title: product[0]?.title ?? 'Product',
    description: product[0]?.description ?? 'Product description',
    openGraph: {
      images: ['/opengraph-image.jpg', ...previousImages],
    },
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const { slug } = await params;
  return <ProductDetails slug={slug} />;
}
