import { useGetAllProducts } from '../../../../hooks/query/Product/useProductMutations';
import ProductCardSkeleton from '../../../ui/Skeleton/Card/ProductCardSkeleton';
import ProductCard from '../ProductCard/ProductCard';

export default function ProductList() {
  const { data, isLoading } = useGetAllProducts();
  const productList = data?.productData?.results;

  if (isLoading) return <ProductCardSkeleton count={10} />;

  return productList?.map((product, index) => (
    <ProductCard
      key={index}
      id={product._id}
      name={product.title}
      price={product?.product_variants[0]?.product_skus?.price as number}
      rating={20}
      reviewCount={10}
      image={product?.product_variants[0]?.images[0] as string}
      productVariantId={product?.product_variants[0]?._id as string}
    />
  ));
}
