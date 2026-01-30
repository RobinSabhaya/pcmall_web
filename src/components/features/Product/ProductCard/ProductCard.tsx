'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Common/Button/Button';

import { useAddToCart } from '../../../../hooks/query/Cart/useCartMutation';
import { useCreateWishlist } from '../../../../hooks/query/Wishlist/useWishlistMutations';
import { formatPrice } from '../../../../utils/custom';
import { APP_ROUTES } from '../../../../utils/routes';
import StarRating from '../../../ui/StarRating/StarRating';
import CustomSVG from '../../../ui/SVG/CustomSVG';

import type { ProductCardProps } from './ProductCard.type';

export default function ProductCard({
  product,
  authenticated,
  viewLayout = 'grid',
  className = '',
}: ProductCardProps) {
  const router = useRouter();

  const productVariantData = product?.product_variants[0];
  const productSkuData = productVariantData?.product_skus;

  // Tanstack query
  const { mutate: addToCart, isPending } = useAddToCart();
  const { mutate: addWishlist } = useCreateWishlist();

  async function onAddToCart() {
    // Check authentication
    if (!authenticated) {
      return router.push(`/${APP_ROUTES.auth}/${APP_ROUTES['sign-in']}`);
    }

    addToCart({
      productVariantId: productVariantData?._id as string,
      quantity: 1,
    });
  }

  async function onAddWishlist() {
    // Check authentication
    if (!authenticated) {
      return router.push(`/${APP_ROUTES.auth}/${APP_ROUTES['sign-in']}`);
    }

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
    <div
      className={`flex justify-center items-center flex-col group relative bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow p-4 h-1/4 gap-5 w-64 md:w-fit ${
        viewLayout === 'list'
          ? '!justify-start !items-start !w-full !flex-row'
          : ''
      } ${className}`}
    >
      <div className="absolute top-2 left-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <p className="px-2 py-1 bg-radium rounded-md shadow-md text-white text-sm">
          New
        </p>
      </div>

      <div className="absolute top-2 right-2 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button
          onClick={onAddWishlist}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center"
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
          href={`/product/${product.slug}`}
          className="p-2 bg-white rounded-full shadow-md hover:bg-gray-50 flex items-center justify-center"
        >
          <Image src="/svg/general/eye.svg" alt="Eye" height={20} width={20} />
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

      {/* Product details */}
      <div className="space-y-2">
        <h3 className="font-medium text-gray-900 line-clamp-2 break-words break-all">
          {product.title ?? 'Product'}
        </h3>

        {viewLayout === 'list' && (
          <p className="font-normal text-black line-clamp-2">
            {product.description}
          </p>
        )}

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
