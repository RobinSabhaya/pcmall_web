'use client';

import { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input';
import ProductImage from '@/public/images/products/product1.png';

import type { OrderSummaryProps } from './OrderSummary.type';

export default function OrderSummary({
  items,
  subtotal,
  shipping,
  total,
  onApplyCoupon,
  paymentMethods,
  selectedPayment,
  onPaymentChange,
  onPlaceOrder,
  isLoading,
}: OrderSummaryProps) {
  const [couponCode, setCouponCode] = useState('');

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      onApplyCoupon(couponCode.trim());
    }
  };

  return (
    <div className="space-y-6">
      {/* Order Items */}
      <div className="space-y-4">
        {items.map(item => (
          <div key={item.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Image
                src={ProductImage}
                alt={item.name}
                width={50}
                height={50}
                className="rounded"
              />
              <span className="text-sm">{item.name}</span>
            </div>
            <span className="font-medium">${item.price}</span>
          </div>
        ))}
      </div>

      {/* Order Totals */}
      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>${subtotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>{shipping === 0 ? 'Free' : `$${shipping}`}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-3">
          <span>Total:</span>
          <span>${total}</span>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="space-y-3">
        {paymentMethods.map(method => (
          <label
            key={method.id}
            className="flex items-center space-x-3 cursor-pointer"
          >
            <input
              type="radio"
              name="payment"
              value={method.id}
              checked={selectedPayment === method.id}
              onChange={e => onPaymentChange(e.target.value)}
              className="w-4 h-4 text-red-500 border-gray-300 focus:ring-red-500"
            />
            <span className="text-sm">{method.label}</span>
            {method.id === 'bank' && (
              <div className="flex space-x-2 ml-auto">
                <Image
                  src="/svg/icons/visa.svg"
                  alt="Visa"
                  width={24}
                  height={16}
                />
                <Image
                  src="/svg/icons/mastercard.svg"
                  alt="Mastercard"
                  width={24}
                  height={16}
                />
                <Image
                  src="/svg/icons/paypal.svg"
                  alt="PayPal"
                  width={24}
                  height={16}
                />
              </div>
            )}
          </label>
        ))}
      </div>

      {/* Coupon Code */}
      <div className="flex space-x-2">
        <Input
          placeholder="Coupon Code"
          value={couponCode}
          onChange={e => setCouponCode(e.target.value)}
          className="flex-1"
        />
        <Button
          variant="primary"
          onClick={handleApplyCoupon}
          disabled={!couponCode.trim()}
        >
          Apply Coupon
        </Button>
      </div>

      {/* Place Order Button */}
      <Button
        variant="primary"
        size="lg"
        onClick={onPlaceOrder}
        disabled={isLoading}
        className="w-full"
      >
        {isLoading ? 'Processing...' : 'Place Order'}
      </Button>
    </div>
  );
}
