import type { Dispatch, SetStateAction } from 'react';

import type { Category } from '../CategoryCard/CategoryCard.type';

export interface CategoryListProps {
  categoryList: Category[];
  selectItem: number;
  setSelectItem: Dispatch<SetStateAction<number>>;
}
