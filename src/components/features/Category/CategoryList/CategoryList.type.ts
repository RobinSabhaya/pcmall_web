import type { Dispatch, SetStateAction } from 'react';

import type { Category } from '../CategoryCard/CategoryCard.type';

export interface CategoryListProps {
  categoryList: Category[];
  selectItem: string | unknown;
  setSelectItem: Dispatch<SetStateAction<string | unknown>>;
}
