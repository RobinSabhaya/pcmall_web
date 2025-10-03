'use client';

import { useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

import Button from '@/components/ui/Button/Button';
import Input from '@/components/ui/Input';

import { useGetAllCart } from '../../../../hooks/query/Cart/useCartMutation';
import { useCreateCheckout } from '../../../../hooks/query/Checkout/useCheckoutMutations';
import { formatPrice } from '../../../../utils/custom';

export default function OrderSummary() {
  // state
  const [couponCode, setCouponCode] = useState('');
  const router = useRouter();

  // Tanstack query
  const { data } = useGetAllCart();
  const { mutate: createCheckout, data: checkoutData } = useCreateCheckout();

  const items = data?.items?.results;

  const shipping = 0;
  const subTotal = items?.reduce((acc, item) => {
    if (item?.product_variants?.product_skus[0]?.price) {
      return (
        acc + item?.product_variants?.product_skus[0]?.price * item?.quantity
      );
    } else {
      return acc;
    }
  }, 0);

  const total = subTotal ?? 0 + shipping;

  // generate payload
  const itemsPayload = items?.map(item => ({
    quantity: item?.quantity,
    product_name: item?.product?.title,
    unit_amount: item?.product_variants?.product_skus[0]?.price as number,
    productVariantId: item?.product_variants?._id,
  }));

  const handleApplyCoupon = () => {
    if (couponCode.trim()) {
      // onApplyCoupon(couponCode.trim());
    }
  };

  function onPlaceOrder() {
    if (itemsPayload) {
      const payload = {
        items: itemsPayload,
        currency: 'INR',
        shippingAddress: '68d962017d0f100d31f08757', //TODO: remove static address
        cartIds: items?.map(item => item._id) ?? [''],
      };

      // Create checkout
      createCheckout(payload);
    }
  }

  if (checkoutData) router.replace(checkoutData.data.checkoutUrl);

  return (
    <div className="space-y-6">
      {/* Order Items */}
      <div className="space-y-4">
        {items?.map(item => (
          <div key={item._id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              {item.product_variants.images.length > 0 && (
                <Image
                  src={item.product_variants.images[0] as string}
                  alt={item.product.title}
                  width={50}
                  height={50}
                  className="rounded"
                />
              )}
              <span className="text-sm">{item.product.title}</span>
            </div>
            <span className="font-medium">
              ₹{' '}
              {formatPrice(
                item.product_variants.product_skus[0]?.price as number
              )}
            </span>
          </div>
        ))}
      </div>

      {/* Order Totals */}
      <div className="border-t pt-4 space-y-3">
        <div className="flex justify-between">
          <span>Subtotal:</span>
          <span>₹ {subTotal}</span>
        </div>
        <div className="flex justify-between">
          <span>Shipping:</span>
          <span>{shipping === 0 ? 'Free' : `₹ ${shipping}`}</span>
        </div>
        <div className="flex justify-between font-semibold text-lg border-t pt-3">
          <span>Total:</span>
          <span>₹ {total}</span>
        </div>
      </div>

      {/* Payment Methods */}
      {/* <div className="space-y-3">
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
      </div> */}

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
        // disabled={isLoading}
        className="w-full"
      >
        Place Order
      </Button>
    </div>
  );
}
