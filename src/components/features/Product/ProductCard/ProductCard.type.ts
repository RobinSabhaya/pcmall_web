import type { StaticImageData } from 'next/image';

export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string | StaticImageData;
  badge?: string;
  colors?: string[];
  productVariantId: string;
}
