'use client';

import Title from '@/components/ui/Title/Title';
import useSlider from '@/hooks/useSlider';

import Slider from '../../ui/Slider';

import { SAMPLE_CATEGORIES } from './SampleData';

export default function CategoryBrowser() {
  const categories = SAMPLE_CATEGORIES;

  const { currentIndex, maxIndex, next, prev, selectItem, setSelectItem } =
    useSlider({
      itemsLength: categories.length,
      maxShowItems: 6,
    });

  const visibleCategories = categories.slice(currentIndex, currentIndex + 6);

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

      <div className="grid grid-cols-2 gap-4 mx-6 lg:grid-cols-6">
        {visibleCategories.map(category => (
          <button
            key={category.id}
            onClick={() => setSelectItem(category.id)}
            className={`
              flex flex-col items-center justify-center p-6 border rounded-lg transition-all hover:shadow-md
              ${
                category.id === selectItem
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }
            `}
          >
            <div className="mb-3 text-3xl">{category.icon}</div>
            <span className="text-sm font-medium">{category.name}</span>
          </button>
        ))}
      </div>
    </section>
  );
}
