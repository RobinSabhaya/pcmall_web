import type { Dispatch, SetStateAction } from 'react';

export interface ProductImage {
  id: number;
  url: string;
  alt: string;
}

export interface ProductGalleryProps {
  productImages: ProductImage[];
  setSelectedImage: Dispatch<SetStateAction<number>>;
  selectedImage: number;
}
