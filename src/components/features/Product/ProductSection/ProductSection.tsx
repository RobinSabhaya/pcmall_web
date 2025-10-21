'use client';

import Slider from '@/components/ui/Common/Slider';

import { useGetAllProducts } from '../../../../hooks/query/Product/useProductMutations';
import useSlider from '../../../../hooks/useSlider';
import Title from '../../../ui/Common/Title/Title';
import FlashSales from '../../../ui/FlashSale/FlashSale';
import ProductCardSkeleton from '../../../ui/Skeleton/Card/ProductCardSkeleton';
import ProductList from '../ProductList/ProductList';

export default function ProductSection() {
  // Tanstack query
  const { data, isLoading } = useGetAllProducts();
  const productList = data?.productData?.results;

  const maxShowItems = 4;

  const { currentIndex, maxIndex, next, prev } = useSlider({
    itemsLength: 4,
    maxShowItems,
  });

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

        {/* Category slider */}
        <Slider
          currentIndex={currentIndex}
          maxIndex={maxIndex}
          prev={prev}
          next={next}
        />
      </div>

      <FlashSales endDate={endDate} className="mx-6" />
      <div className="flex justify-center items-center gap-4 mx-6 my-4 flex-wrap md:justify-start">
        {isLoading ? (
          <ProductCardSkeleton count={10} />
        ) : (
          productList?.length && <ProductList products={productList} />
        )}
      </div>
    </>
  );
}
