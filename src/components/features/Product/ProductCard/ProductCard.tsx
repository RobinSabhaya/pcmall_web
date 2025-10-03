'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button/Button';

import { useAddToCart } from '../../../../hooks/query/Cart/useCartMutation';
// import { successMessage } from '../../../../hooks/useToaster';
import { formatPrice } from '../../../../utils/custom';
import StarRating from '../../../ui/StarRating/StarRating';

import type { ProductCardProps } from './ProductCard.type';

export default function ProductCard({
  id,
  name,
  price,
  originalPrice,
  rating,
  reviewCount,
  image,
  productVariantId,
}: ProductCardProps) {
  const router = useRouter();

  // Tanstack query
  const { mutate: addToCart } = useAddToCart();

  async function onAddToCart() {
    addToCart({
      productVariantId,
      quantity: 1,
    });

    // successMessage('Cart added successfully')
  }

  /**
   * Handle redirect to product page
   */
  function handleRedirectToProduct() {
    router.push(`/product/${id}`);
  }

  return (
    <div className="flex justify-center items-center flex-col group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-1/4 gap-2 w-fit">
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="px-2 py-1 bg-radium rounded-md shadow-md text-white text-sm">
          New
        </p>
      </div>

      <div onClick={handleRedirectToProduct} className="cursor-pointer">
        <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => {}}
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
            loading="eager"
            className="object-cover group-hover:scale-105 transition-transform"
          />
        </div>
      </div>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-900 line-clamp-2">{name}</h3>

        <div className="flex items-center gap-1">
          {/* Star Rating */}
          <StarRating rating={rating} />
          <span className="text-sm text-gray-500">({reviewCount})</span>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-gray-900">₹ {price}</span>
          {originalPrice && (
            <span className="text-sm text-gray-500 line-through">
              ₹ {formatPrice(originalPrice)}
            </span>
          )}
        </div>

        <Button onClick={onAddToCart} className="w-full" size="sm">
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
