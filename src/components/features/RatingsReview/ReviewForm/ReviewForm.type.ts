import type { Dispatch, SetStateAction } from 'react';

export interface ReviewFormProp {
  productId: string;
  setShowForm: Dispatch<SetStateAction<boolean>>;
}

export interface ReviewForm {
  message: string;
}
