import ProductCard from '../ProductCard/ProductCard';

import type { Products } from './ProductList.type';

export default function ProductList({ products }: { products: Products }) {
  return products?.map(product => (
    <ProductCard key={product._id} product={product} />
  ));
}
