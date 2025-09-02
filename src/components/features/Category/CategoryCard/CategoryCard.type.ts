import type { Dispatch, SetStateAction } from 'react';

export interface Category {
  id: number;
  name: string;
  sub_name?: string;
  icon: React.ReactNode;
  href: string;
  isActive?: boolean;
}

export interface CategoryCardProps {
  category: Category;
  selectItem: number;
  setSelectItem: Dispatch<SetStateAction<number>>;
}
