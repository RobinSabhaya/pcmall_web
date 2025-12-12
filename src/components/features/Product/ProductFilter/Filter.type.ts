import type { Dispatch, SetStateAction } from 'react';

export type GroupKey = 'gender' | 'size' | 'color' | 'price';

export interface FilterProps {
  isOpenFilter: boolean;
  setIsOpenFilter: Dispatch<SetStateAction<boolean>>;
}
