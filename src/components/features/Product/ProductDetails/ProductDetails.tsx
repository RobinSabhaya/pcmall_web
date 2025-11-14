'use client';

import { useState } from 'react';

import Image from 'next/image';

import { BreadCrumb } from '@/components/ui/Common';

import { useAddToCart } from '../../../../hooks/query/Cart/useCartMutation';
import { useGetAllProducts } from '../../../../hooks/query/Product/useProductMutations';
import { calculateDiscount, formatPrice } from '../../../../utils/custom';
import Button from '../../../ui/Common/Button/Button';
import Loader from '../../../ui/Common/Loader/Loader';
import StarRating from '../../../ui/StarRating/StarRating';
import RatingsReview from '../../RatingsReview';
import ProductGallery from '../ProductGallery/ProductGallery';

interface ProductDetailsProps {
  slug: string;
}
export default function ProductDetails({ slug }: ProductDetailsProps) {
  const [selectedImage, setSelectedImage] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [quantity, setQuantity] = useState(1);

  // Tanstack query
  const { data, isLoading } = useGetAllProducts({
    slug: String(slug),
  });
  const { mutate: addToCart } = useAddToCart();
  const productList = data?.productData?.results;

  let product;
  if (productList && productList?.length > 0) {
    product = productList[0];
  }

  const productVariantData = product?.product_variants[0];
  const productSkuData = product?.product_variants[0]?.product_skus;

  const breadCrumbList = [
    { label: 'Home', href: '/' },
    { label: 'product', href: '/product' },
    { label: product?.title as string, href: '/' },
  ];

  const inStock = true;

  if (isLoading) return <Loader />;

  const handleAddToCart = () => {
    if (productVariantData)
      addToCart({
        productVariantId: productVariantData._id,
        quantity,
      });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <BreadCrumb breadCrumbList={breadCrumbList} />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <div className="space-y-4">
          {/* Main image */}
          <div className="aspect-square bg-gray-100 rounded-lg overflow-hidden">
            {productVariantData?.images[selectedImage] && (
              <Image
                src={productVariantData?.images[selectedImage]}
                alt={productVariantData?.images[selectedImage] as string}
                width={600}
                height={600}
                className="w-full h-full object-cover"
                fetchPriority="high"
                priority
              />
            )}
          </div>

          {productVariantData?.images && (
            <ProductGallery
              productImages={productVariantData?.images}
              selectedImage={selectedImage}
              setSelectedImage={setSelectedImage}
            />
          )}
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {product?.title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <StarRating rating={10} />
              </div>
              <span className="text-sm text-gray-500">({10} Reviews)</span>
              <span
                className={`text-sm px-2 py-1 rounded ${
                  inStock
                    ? 'bg-green-100 text-green-800'
                    : 'bg-brand-primary-hover text-brand-primary'
                }`}
              >
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              {productSkuData?.price && (
                <>
                  <span className="text-3xl font-bold text-gray-900">
                    ₹{' '}
                    {formatPrice(
                      productSkuData?.price -
                        calculateDiscount(
                          productSkuData?.price,
                          productSkuData?.discount
                        )
                    )}
                  </span>
                  <span className="text-xl text-gray-500 line-through">
                    ₹ {formatPrice(productSkuData?.price)}
                  </span>
                </>
              )}
            </div>

            <p className="text-gray-600 mb-6">{product?.description}</p>
          </div>

          {/* Colors */}
          {/* TODO: Dynamic colors */}
          {['red', 'green', 'blue'].length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Colors:
              </h3>
              <div className="flex gap-2">
                {['red', 'green', 'blue'].map((color, id) => (
                  <button
                    key={id}
                    onClick={() => setSelectedColor(id)}
                    // disabled={!color.available}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === id
                        ? 'border-gray-900'
                        : 'border-gray-300'
                    } ${'opacity-50'}`}
                    style={{ backgroundColor: color }}
                    title={color}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {/* TODO: Dynamic sizes */}
          {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Size:</h3>
              <div className="flex gap-2">
                {['S', 'M', 'L', 'XL', 'XXL', 'XXXL'].map((size, id) => (
                  <button
                    key={id}
                    onClick={() => setSelectedSize(size)}
                    // disabled={!size.available}
                    className={`px-4 py-2 border rounded-md text-sm font-medium ${
                      selectedSize === size
                        ? 'border-brand-primary bg-brand-primary text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    } ${'opacity-50'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Quantity & Actions */}
          <div className="flex items-center gap-4">
            <div className="flex items-center border border-gray-300 rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 hover:bg-gray-50"
              >
                −
              </button>
              <span className="px-4 py-2 border-x border-gray-300">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity(quantity + 1)}
                className="px-3 py-2 hover:bg-gray-50"
              >
                +
              </button>
            </div>

            <Button
              onClick={handleAddToCart}
              disabled={!inStock}
              className="flex-1"
            >
              Buy Now
            </Button>

            <button
              // onClick={() => onWishlist(id)}
              className="p-3 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <svg
                className="w-5 h-5"
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
          </div>

          {/* Delivery Info */}
          {/* <div className="border border-gray-200 rounded-lg p-4 space-y-4">
            {deliveryInfo.map((info, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center flex-shrink-0">
                  {info.type === 'free' ? (
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
                        d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                      />
                    </svg>
                  ) : (
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
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                      />
                    </svg>
                  )}
                </div>
                <div>
                  <p className="font-medium text-gray-900">
                    {info.description}
                  </p>
                  {info.details && (
                    <p className="text-sm text-gray-500">{info.details}</p>
                  )}
                </div>
              </div>
            ))}
          </div> */}
        </div>
        {product?._id && <RatingsReview productId={product._id} />}
      </div>
    </div>
  );
}
