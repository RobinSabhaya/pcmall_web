'use client';

import { memo } from 'react';

import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Common/Button/Button';

import type { CartSummaryProps } from './CartSummary.type';

export default memo(function CartSummary({
  cartSummaryData,
}: CartSummaryProps) {
  const router = useRouter();
  function onProceedToCheckout() {
    router.push('/checkout');
  }

  return (
    <div className="border border-gray-300 rounded-lg p-6 bg-white">
      <h3 className="text-lg font-semibold mb-4">Cart Total</h3>

      <div className="space-y-3 mb-6">
        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Subtotal:</span>
          <span className="font-medium">₹ {cartSummaryData.subtotal}</span>
        </div>

        <div className="flex justify-between py-2 border-b border-gray-200">
          <span>Shipping:</span>
          <span className="font-medium">
            {cartSummaryData.shipping === 0
              ? 'Free'
              : `₹ ${cartSummaryData.shipping}`}
          </span>
        </div>

        <div className="flex justify-between py-2 text-lg font-semibold">
          <span>Total:</span>
          <span>₹ {cartSummaryData.total}</span>
        </div>
      </div>

      <Button
        onClick={onProceedToCheckout}
        className="w-full bg-brand-primary hover:bg-brand-primary-hover text-white"
        size="lg"
        disabled={!cartSummaryData?.total}
      >
        Proceeds to checkout
      </Button>
    </div>
  );
});
