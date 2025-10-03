'use client';

import type { ProductCardSkeletonProps } from './ProductCardSkeleton.type';

export default function ProductCardSkeleton({
  count = 1,
  className = '',
}: ProductCardSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={`flex justify-center items-center flex-col relative bg-white rounded-lg shadow-sm p-4 h-1/4 gap-2 w-fit animate-pulse ${className}`}
        >
          {/* Image skeleton */}
          <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-200 w-[200px] h-[200px] relative">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
          </div>

          {/* Content skeleton */}
          <div className="space-y-2 w-full">
            {/* Title skeleton */}
            <div className="space-y-1">
              <div className="h-4 bg-gray-200 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-3/4 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>
            </div>

            {/* Rating skeleton */}
            <div className="flex items-center gap-1">
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className="w-4 h-4 bg-gray-200 rounded relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
                  </div>
                ))}
              </div>
              <div className="h-3 bg-gray-200 rounded w-8 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>
            </div>

            {/* Price skeleton */}
            <div className="flex items-center gap-2">
              <div className="h-5 bg-gray-200 rounded w-16 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>
              <div className="h-4 bg-gray-200 rounded w-12 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>
            </div>

            {/* Button skeleton */}
            <div className="h-8 bg-gray-200 rounded w-full relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
