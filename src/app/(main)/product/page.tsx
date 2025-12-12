'use client';

import { useEffect, useRef, useState } from 'react';

import { useSearchParams } from 'next/navigation';

import { Grid, List, SlidersHorizontal } from 'lucide-react';

import { ProductList } from '../../../components/features/Product';
import {
  Filters,
  Sort,
} from '../../../components/features/Product/ProductFilter';
import ProductCardSkeleton from '../../../components/ui/Skeleton/Card';
import { useGetAllProductsPaginated } from '../../../hooks';

import type { ViewLayoutProp } from './product.type';

const LoadingComponent = <ProductCardSkeleton count={4} className="md:!w-64" />;

export default function ProductsPage() {
  // state
  const searchParams = useSearchParams();
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [viewLayout, setViewLayout] = useState<ViewLayoutProp>('grid');
  const observerRef = useRef<HTMLDivElement>(null);

  // Tanstack query
  const filter = {
    ...(searchParams?.get('category') && {
      categories: JSON.stringify([searchParams?.get('category') as string]),
    }), // category
    ...(searchParams?.get('gender') && {
      gender: JSON.stringify([searchParams?.get('gender') as string]),
    }), // gender
    ...(searchParams?.get('price') && {
      prices: JSON.stringify({
        min: searchParams?.get('price')?.split('-')[0] ?? 0,
        max: searchParams?.get('price')?.split('-')[1] ?? 1000000,
      }),
    }), // price
    ...(searchParams.get('search') && {
      search: `title:${searchParams?.get('search')}`,
    }), //search
    ...(searchParams.get('sort') && {
      sortBy: String(searchParams.get('sort')),
    }), // sort
  };

  const { data, isLoading, fetchNextPage, isFetchingNextPage } =
    useGetAllProductsPaginated(filter);

  const products = data?.pages?.map(page => page?.results).flat();

  // callbacks
  const handleFilter = () => {
    if (isOpenFilter) {
      setIsOpenFilter(false);
    } else {
      setIsOpenFilter(true);
    }
  };

  function changeViewLayout(view: ViewLayoutProp) {
    setViewLayout(view);
  }

  // IntersectionObserver to trigger pagination
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0]?.isIntersecting) {
          fetchNextPage();
        }
      },
      { threshold: 1, root: null, rootMargin: '200px' }
    );

    if (observerRef.current) observer.observe(observerRef.current);

    return () => {
      if (observerRef.current) observer.unobserve(observerRef.current);
    };
  });

  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-4">
      <header className="flex items-center justify-between py-6 flex-wrap gap-3">
        <h1 className="text-heading-3 text-dark-900 flex gap-2">
          New ({products?.length ?? 0})
        </h1>
        <div className="flex justify-start md:justify-center items-center gap-4 md:gap-2 flex-wrap">
          {/* Filter icon */}
          <div className="border border-gray-300 bg-blue-100 w-max p-2 rounded-sm cursor-pointer hover:border-gray-400">
            <SlidersHorizontal onClick={handleFilter} />
          </div>

          {/* List & Grid icon */}
          <div className="border border-gray-300 bg-blue-100 w-max p-2 rounded-sm cursor-pointer hover:border-gray-400">
            <List onClick={() => changeViewLayout('list')} />
          </div>
          <div className="border border-gray-300 bg-blue-100 w-max p-2 rounded-sm cursor-pointer hover:border-gray-400">
            <Grid onClick={() => changeViewLayout('grid')} />
          </div>

          {/* Sort */}
          <Sort />
        </div>
      </header>

      <section className="flex justify-start items-start gap-5">
        <Filters
          isOpenFilter={isOpenFilter}
          setIsOpenFilter={setIsOpenFilter}
        />

        {isLoading ? (
          LoadingComponent
        ) : (
          <>
            {products?.length && products?.length > 0 ? (
              <div className="flex flex-wrap justify-center md:justify-start items-center gap-3">
                <ProductList
                  products={products}
                  viewLayout={viewLayout}
                  className={`${viewLayout == 'grid' ? 'md:!w-64' : '!w-full'}`}
                />
                {isFetchingNextPage && LoadingComponent}
                <div ref={observerRef} />
              </div>
            ) : (
              <div className="flex justify-center items-center w-full min-h-96 text-2xl font-normal">
                Search product not found!
              </div>
            )}
          </>
        )}
      </section>
    </main>
  );
}
