import CategoryCard from '../CategoryCard/CategoryCard';

import type { CategoryListProps } from './CategoryList.type';

export default function CategoryList({
  categoryList,
  setSelectItem,
  selectItem,
}: CategoryListProps) {
  return (
    <>
      {categoryList.map(category => (
        <CategoryCard
          key={category._id}
          category={category}
          selectItem={selectItem as string}
          setSelectItem={setSelectItem}
        />
      ))}
    </>
  );
}
