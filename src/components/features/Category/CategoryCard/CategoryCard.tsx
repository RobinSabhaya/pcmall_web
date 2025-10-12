import { useRouter } from 'next/navigation';

import { formatCategoryName } from '../../../../utils/custom';

import type { CategoryCardProps } from './CategoryCard.type';

export default function CategoryCard({
  category,
  selectItem,
  setSelectItem,
}: CategoryCardProps) {
  const router = useRouter();

  return (
    <button
      key={category._id}
      onClick={() => {
        setSelectItem(() => category._id);

        router.push(`/product?category=${category.categoryName}`);
      }}
      className={`
              flex flex-col items-center justify-center p-6 border rounded-lg transition-all hover:shadow-md
              ${
                category._id === selectItem
                  ? 'bg-red-500 text-white border-red-500'
                  : 'bg-white text-gray-700 border-gray-200 hover:border-gray-300'
              }
            `}
    >
      <div className="mb-3 text-3xl">{category.icon && category.icon}</div>
      <span className="text-sm font-medium">
        {formatCategoryName(category.categoryName)}
      </span>
      <span className="text-sm font-medium">{category.subCategory}</span>
    </button>
  );
}
