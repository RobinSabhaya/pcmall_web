'use client';

import Image from 'next/image';
import Link from 'next/link';

import Button from '@/components/ui/Button/Button';

interface ProductCardProps {
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

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  onAddToCart,
  onWishlist,
}: ProductCardProps) {
  return (
    <div className="flex justify-center items-center flex-col group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-1/4 gap-2 w-fit">
      <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={() => onWishlist?.(id)}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
        </button>
        <Link
          href="/product"
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
            />
          </svg>
        </Link>
      </div>

      <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={image}
          alt={name}
          width={200}
          height={200}
          className="object-cover group-hover:scale-105 transition-transform"
        />
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-900 line-clamp-2">{name}</h3>

        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <svg
              key={i}
              className={`w-4 h-4 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`}
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">${price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ${originalPrice}
            </span>
          )}
        </div>

        <Button onClick={() => onAddToCart?.(id)} className="w-full" size="sm">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
