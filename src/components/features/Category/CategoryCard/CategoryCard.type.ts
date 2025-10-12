import type { Dispatch, SetStateAction } from 'react';

export interface Category {
  _id: string;
  categoryName: string;
  subCategory?: string[];
  icon?: React.ReactNode;
  href?: string;
  isActive?: boolean;
}

export interface CategoryCardProps {
  category: Category;
  selectItem: string;
  setSelectItem: Dispatch<SetStateAction<string>>;
}
