'use client';

import Slider from '@/components/ui/Common/Slider';
import Title from '@/components/ui/Common/Title/Title';
import useSlider from '@/hooks/useSlider';

import { useGetAllCategories } from '../../../hooks/query/Category/useCategory';

import CategoryList from './CategoryList';

export default function CategoryBrowser() {
  const { data: categoryData } = useGetAllCategories();

  const { currentIndex, maxIndex, next, prev, selectItem, setSelectItem } =
    useSlider({
      itemsLength: categoryData?.categoryData?.length as number,
      maxShowItems: 6,
    });

  const visibleCategories = categoryData?.categoryData?.slice(
    currentIndex,
    currentIndex + 6
  );

  return (
    <section className="py-8">
      <Title title="Category" />

      <div className="flex items-center justify-between mb-8 mx-6">
        <h2 className="text-3xl font-semibold">Browse By Category</h2>
        {/* Category slider */}
        <Slider
          currentIndex={currentIndex}
          maxIndex={maxIndex}
          prev={prev}
          next={next}
        />
      </div>

      {visibleCategories && visibleCategories?.length > 0 && (
        <div className="grid grid-cols-2 gap-4 mx-6 lg:grid-cols-6">
          <CategoryList
            categoryList={visibleCategories}
            selectItem={selectItem}
            setSelectItem={setSelectItem}
          />
        </div>
      )}
    </section>
  );
}
