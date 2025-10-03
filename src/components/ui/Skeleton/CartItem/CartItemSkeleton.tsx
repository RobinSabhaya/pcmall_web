import type { CartItemSkeletonProps } from './CartItemSkeleton.type';

export default function CartItemSkeleton({ count = 1 }: CartItemSkeletonProps) {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="border-b border-gray-200 animate-pulse">
          {/* Product Info Column */}
          <td className="py-4">
            <div className="flex items-center gap-3">
              {/* Remove button skeleton */}
              <div className="w-4 h-4 bg-gray-200 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>

              {/* Image skeleton */}
              <div className="w-16 h-16 bg-gray-200 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>

              {/* Product title skeleton */}
              <div className="h-4 bg-gray-200 rounded w-32 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
              </div>
            </div>
          </td>

          {/* Price Column */}
          <td className="py-4 text-center">
            <div className="h-4 bg-gray-200 rounded w-16 mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
            </div>
          </td>

          {/* Quantity Column */}
          <td className="py-4 text-center">
            <div className="h-8 bg-gray-200 rounded w-20 mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
            </div>
          </td>

          {/* Total Column */}
          <td className="py-4 text-center">
            <div className="h-4 bg-gray-200 rounded w-20 mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 animate-shimmer bg-[length:200%_100%]" />
            </div>
          </td>
        </div>
      ))}
    </>
  );
}
