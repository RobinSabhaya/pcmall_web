'use client';

import { useState } from 'react';

import Slider from '@/components/ui/Common/Slider';

import { useGetAllProducts } from '../../../../hooks';
import useSlider from '../../../../hooks/useSlider';
import Title from '../../../ui/Common/Title/Title';
import FlashSales from '../../../ui/FlashSale/FlashSale';
import ProductCardSkeleton from '../../../ui/Skeleton/Card';
import ProductList from '../ProductList';

export default function ProductSection() {
  // state
  const [page, setPage] = useState<number>(1);

  // Tanstack query
  const { data, isLoading } = useGetAllProducts({
    page,
  });
  const productList = data?.productData?.results;

  const maxShowItems = 10;

  const {
    currentIndex,
    maxIndex,
    prev: prevPage,
    next: nextPage,
  } = useSlider({
    itemsLength: data?.productData?.total ?? 194,
    maxShowItems,
  });

  function prev() {
    setPage(prevPage => prevPage - 1);
    prevPage();
  }

  function next() {
    setPage(prevPage => prevPage + 1);
    nextPage();
  }

  const endDate = new Date(
    Date.now() +
      3 * 24 * 60 * 60 * 1000 +
      23 * 60 * 60 * 1000 +
      19 * 60 * 1000 +
      56 * 1000
  );

  return (
    <>
      {/* Sample products */}
      <div className="flex items-center justify-between">
        <Title title="All Products" />

        {/* Product slider */}
        <Slider
          currentIndex={currentIndex}
          maxIndex={maxIndex}
          prev={prev}
          next={next}
        />
      </div>

      <FlashSales endDate={endDate} />
      <div className="flex justify-center items-center gap-4 my-4 flex-wrap md:justify-start">
        {isLoading ? (
          <ProductCardSkeleton count={10} />
        ) : productList && productList?.length > 0 ? (
          <ProductList products={productList} />
        ) : null}
      </div>
    </>
  );
}
