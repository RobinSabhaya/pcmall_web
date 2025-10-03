import ProductDetails from '@/components/features/Product/ProductDetails/ProductDetails';

interface PageProps {
  id: number;
}

export default async function ProductPage({
  params,
}: {
  params: Promise<PageProps>;
}) {
  const { id } = await params;
  return <ProductDetails productId={id} />;
}
