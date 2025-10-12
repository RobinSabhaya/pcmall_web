'use client';

import { useSearchParams } from 'next/navigation';

import Filters from '@/components/features/Product/ProductFilter/Filters';
import Sort from '@/components/features/Product/ProductFilter/Sort';

import ProductList from '../../../components/features/Product/ProductList/ProductList';
import ProductCardSkeleton from '../../../components/ui/Skeleton/Card/ProductCardSkeleton';
import { useGetAllProducts } from '../../../hooks/query/Product/useProductMutations';

export default function ProductsPage() {
  // state
  const searchParams = useSearchParams();

  // Tanstack query
  const { data, isLoading } = useGetAllProducts({
    ...(searchParams?.get('category') && {
      categories: JSON.stringify([searchParams?.get('category') as string]),
    }),
    ...(searchParams?.get('gender') && {
      gender: JSON.stringify([searchParams?.get('gender') as string]),
    }),
  });

  const products = data?.productData.results;

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <header className="flex items-center justify-between py-6">
        <h1 className="text-heading-3 text-dark-900">New ({10})</h1>
        <Sort />
      </header>

      <section className="flex justify-start items-start gap-5">
        <Filters />

        {isLoading ? (
          <ProductCardSkeleton count={3} />
        ) : (
          <div className="flex flex-wrap justify-start items-center gap-3">
            {products?.length && products?.length > 0 ? (
              <ProductList products={products} />
            ) : (
              <div>Search product not found!</div>
            )}
          </div>
        )}
      </section>
    </main>
  );
}
