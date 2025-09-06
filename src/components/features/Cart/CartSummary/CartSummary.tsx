'use client';

// import { useState } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button/Button';

import { cartData } from '../Cart/sampleData';

export default function CartSummary() {
  // const [couponCode, setCouponCode] = useState('');
  const router = useRouter();

  // const handleApplyCoupon = () => {
  //   if (couponCode.trim()) {
  //     // onApplyCoupon(couponCode.trim());
  //     setCouponCode('');
  //   }
  // };

  const { summary } = cartData;

  function onProceedToCheckout() {
    router.push('/checkout');
  }

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white">
      <h3 className="text-lg font-semibold mb-4">Cart Total</h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Subtotal:</span>
          <span className="font-medium">${summary.subtotal}</span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Shipping:</span>
          <span className="font-medium">
            {summary.shipping === 0 ? 'Free' : `$${summary.shipping}`}
          </span>
        </div>

        <div className="flex justify-between py-2 text-lg font-semibold">
          <span>Total:</span>
          <span>${summary.total}</span>
        </div>
      </div>

      <Button
        onClick={onProceedToCheckout}
        className="w-full bg-red-500 hover:bg-red-600 text-white"
        size="lg"
      >
        Proceeds to checkout
      </Button>
    </div>
  );
}
