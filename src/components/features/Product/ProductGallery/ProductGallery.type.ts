import type { Dispatch, SetStateAction } from 'react';

import type { StaticImageData } from 'next/image';

export interface ProductImage {
  id: number;
  url: StaticImageData | string;
  alt: string;
}

export interface ProductGalleryProps {
  productImages: ProductImage[];
  setSelectedImage: Dispatch<SetStateAction<number>>;
  selectedImage: number;
}
