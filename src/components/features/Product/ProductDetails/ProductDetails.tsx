'use client';

import { useState } from 'react';

import type { StaticImageData } from 'next/image';
// eslint-disable-next-line no-duplicate-imports
import Image from 'next/image';

import { BreadCrumb } from '@/components/ui/BreadCrumb';
import ProductImage1 from '@/public/images/products/product1.png';
import ProductImage2 from '@/public/images/products/product2.png';
import ProductImage3 from '@/public/images/products/product3.png';
import ProductImage4 from '@/public/images/products/product4.png';

import Button from '../../../ui/Button/Button';
import StarRating from '../../../ui/StarRating/StarRating';
import ProductGallery from '../ProductGallery/ProductGallery';

export default function ProductDetails() {
  const breadCrumbList = [
    { label: 'Home', href: '/' },
    { label: 'product', href: '/product' },
    { label: 'Havic HV G-92 Gamepad', href: '/' },
  ];

  const mockProduct = {
    id: 'havic-hv-g92',
    name: 'Havic HV G-92 Gamepad',
    price: 192.0,
    originalPrice: 240.0,
    rating: { rating: 4, count: 150 },
    inStock: true,
    description:
      'PlayStation 5 Controller Skin High quality vinyl with air channel adhesive for easy bubble free install & mess free removal Pressure sensitive.',
    images: [
      {
        id: 1,
        url: ProductImage1,
        alt: 'Havic HV G-92 Gamepad',
      },
      {
        id: 2,
        url: ProductImage2,
        alt: 'Havic HV G-92 Gamepad Side View',
      },
      {
        id: 3,
        url: ProductImage3,
        alt: 'Havic HV G-92 Gamepad Back View',
      },
      {
        id: 4,
        url: ProductImage4,
        alt: 'Havic HV G-92 Gamepad Detail',
      },
    ],
    colors: [
      { id: 'black', name: 'Black', value: '#000000', available: true },
      { id: 'red', name: 'Red', value: '#ef4444', available: true },
    ],
    sizes: [
      { id: 'xs', name: 'XS', value: 'XS', available: true },
      { id: 's', name: 'S', value: 'S', available: true },
      { id: 'm', name: 'M', value: 'M', available: true },
      { id: 'l', name: 'L', value: 'L', available: true },
      { id: 'xl', name: 'XL', value: 'XL', available: true },
    ],

    deliveryInfo: [
      {
        type: 'free' as const,
        description: 'Free Delivery',
        details: 'Enter your postal code for Delivery Availability',
      },
      {
        type: 'paid' as const,
        description: 'Return Delivery',
        details: 'Free 30 Days Delivery Returns. Details',
      },
    ],
  };

  const {
    name,
    price,
    originalPrice,
    rating,
    inStock,
    description,
    images,
    colors,
    sizes,
    deliveryInfo,
  } = mockProduct;

  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedColor, setSelectedColor] = useState(colors[0]?.id);
  const [selectedSize, setSelectedSize] = useState(sizes[0]?.id);
  const [quantity, setQuantity] = useState(1);

  const handleAddToCart = () => {
    // onAddToCart(id, quantity, {
    //   color: selectedColor as string,
    //   size: selectedSize as string
    // })
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
            <Image
              src={images[selectedImage]?.url as StaticImageData}
              alt={images[selectedImage]?.alt as string}
              width={600}
              height={600}
              loading="eager"
              className="w-full h-full object-cover"
            />
          </div>

          <ProductGallery
            productImages={mockProduct.images}
            selectedImage={selectedImage}
            setSelectedImage={setSelectedImage}
          />
        </div>

        {/* Product Info */}
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center">
                <StarRating rating={rating.rating} />
              </div>
              <span className="text-sm text-gray-500">
                ({rating.count} Reviews)
              </span>
              <span
                className={`text-sm px-2 py-1 rounded ${
                  inStock
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}
              >
                {inStock ? 'In Stock' : 'Out of Stock'}
              </span>
            </div>

            {/* Price */}
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl font-bold text-gray-900">
                ${price.toFixed(2)}
              </span>
              {originalPrice && (
                <span className="text-xl text-gray-500 line-through">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
            </div>

            <p className="text-gray-600 mb-6">{description}</p>
          </div>

          {/* Colors */}
          {colors.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">
                Colours:
              </h3>
              <div className="flex gap-2">
                {colors.map(color => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color.id)}
                    disabled={!color.available}
                    className={`w-8 h-8 rounded-full border-2 ${
                      selectedColor === color.id
                        ? 'border-gray-900'
                        : 'border-gray-300'
                    } ${
                      !color.available ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                    style={{ backgroundColor: color.value }}
                    title={color.name}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Sizes */}
          {sizes.length > 0 && (
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-3">Size:</h3>
              <div className="flex gap-2">
                {sizes.map(size => (
                  <button
                    key={size.id}
                    onClick={() => setSelectedSize(size.id)}
                    disabled={!size.available}
                    className={`px-4 py-2 border rounded-md text-sm font-medium ${
                      selectedSize === size.id
                        ? 'border-red-500 bg-red-500 text-white'
                        : 'border-gray-300 text-gray-700 hover:border-gray-400'
                    } ${
                      !size.available ? 'opacity-50 cursor-not-allowed' : ''
                    }`}
                  >
                    {size.value}
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
          <div className="border border-gray-200 rounded-lg p-4 space-y-4">
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
          </div>
        </div>
      </div>
    </div>
  );
}
