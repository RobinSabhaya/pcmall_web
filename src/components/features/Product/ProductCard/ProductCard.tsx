'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Common/Button/Button';

import { useAddToCart } from '../../../../hooks/query/Cart/useCartMutation';
import { useCreateWishlist } from '../../../../hooks/query/Wishlist/useWishlistMutations';
import { formatPrice } from '../../../../utils/custom';
import StarRating from '../../../ui/StarRating/StarRating';
import CustomSVG from '../../../ui/SVG/CustomSVG';

import type { ProductCardProps } from './ProductCard.type';

export default function ProductCard({ product }: ProductCardProps) {
  const router = useRouter();

  const productVariantData = product?.product_variants[0];
  const productSkuData = productVariantData?.product_skus;

  // Tanstack query
  const { mutate: addToCart, isPending } = useAddToCart();
  const { mutate: addWishlist } = useCreateWishlist();

  async function onAddToCart() {
    addToCart({
      productVariantId: productVariantData?._id as string,
      quantity: 1,
    });
  }

  async function onAddWishlist() {
    addWishlist({
      productId: product._id,
    });
  }

  /**
   * Handle redirect to product page
   */
  function handleRedirectToProduct() {
    router.push(`/product/${product.slug}`);
  }

  return (
    <div className="flex justify-center items-center flex-col group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-1/4 gap-2 w-fit">
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="px-2 py-1 bg-radium rounded-md shadow-md text-white text-sm">
          New
        </p>
      </div>

      <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onAddWishlist}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50"
        >
          {product.isInWishlist ? (
            <CustomSVG fillColor="red" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </CustomSVG>
          ) : (
            <CustomSVG viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </CustomSVG>
          )}
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

      <button
        className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100 cursor-pointer"
        onClick={handleRedirectToProduct}
      >
        {productVariantData?.images &&
          productVariantData?.images?.length > 0 && (
            <Image
              src={productVariantData.images[0] as string}
              alt={product.title}
              width={200}
              height={200}
              fetchPriority="high"
              className="object-cover group-hover:scale-105 transition-transform"
            />
          )}
      </button>

      <div className="space-y-2">
        <h3 className="font-medium text-gray-900 line-clamp-2">
          {product.title ?? 'Product'}
        </h3>

        <div className="flex items-center gap-1">
          {/* Star Rating */}
          <StarRating rating={10} />
          <span className="text-sm text-gray-500">20</span>
        </div>

        <div className="flex items-center gap-2">
          {productSkuData?.price && (
            <span className="text-lg font-bold text-gray-900">
              ₹ {formatPrice(productSkuData?.price)}
            </span>
          )}
          {productSkuData?.price && (
            <span className="text-sm text-gray-500 line-through">
              ₹ {formatPrice(productSkuData?.price)}
            </span>
          )}
        </div>

        <Button
          onClick={onAddToCart}
          className="w-full"
          size="sm"
          disabled={productVariantData?.isInCart}
          loading={isPending}
        >
          Add To Cart
        </Button>
      </div>
    </div>
  );
}
