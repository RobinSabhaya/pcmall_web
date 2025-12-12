import type { ViewLayoutProp } from '../../../../app/(main)/product/product.type';
import { useAuth } from '../../../../hooks/useAuth';
import ProductCard from '../ProductCard/ProductCard';

import type { Products } from './ProductList.type';

export default function ProductList({
  products,
  viewLayout = 'grid',
  className = '',
}: {
  products: Products;
  viewLayout?: ViewLayoutProp;
  className?: string;
}) {
  const { authenticated } = useAuth();
  return products?.map(product => (
    <ProductCard
      key={`product-${product._id}`}
      product={product}
      authenticated={authenticated}
      viewLayout={viewLayout}
      className={className}
    />
  ));
}
