import type { CategoryCardProps } from './CategoryCard.type';

export default function CategoryCard({
  category,
  selectItem,
  setSelectItem,
}: CategoryCardProps) {
  return (
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
      <span className="text-sm font-medium">{category.sub_name}</span>
    </button>
  );
}
