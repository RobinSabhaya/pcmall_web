export interface ProductImage {
  id: string;
  url: string;
  alt: string;
}

export interface ProductVariant {
  id: string;
  name: string;
  value: string;
  available: boolean;
}

export interface ProductReview {
  rating: number;
  count: number;
}

export interface DeliveryInfo {
  type: 'free' | 'paid';
  description: string;
  details?: string;
}

export interface ProductDetailsProps {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  rating: ProductReview;
  inStock: boolean;
  stockCount?: number;
  description: string;
  images: ProductImage[];
  colors: ProductVariant[];
  sizes: ProductVariant[];
  breadcrumb: { label: string; href?: string }[];
  deliveryInfo: DeliveryInfo[];
  onAddToCart: (
    productId: string,
    quantity: number,
    variants: Record<string, string>
  ) => void;
  onWishlist: (productId: string) => void;
}
