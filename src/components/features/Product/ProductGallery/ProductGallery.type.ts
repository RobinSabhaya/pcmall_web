import type { Dispatch, SetStateAction } from 'react';

export interface ProductGalleryProps {
  productImages: string[];
  setSelectedImage: Dispatch<SetStateAction<number>>;
  selectedImage: number;
}
