export interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  badge?: string;
  colors?: string[];
  onAddToCart?: (id: string) => void;
  onWishlist?: (id: string) => void;
  onQuickView?: (id: string) => void;
}
