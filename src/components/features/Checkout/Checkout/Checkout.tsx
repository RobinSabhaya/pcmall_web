'use client';

import { useMemo, useState } from 'react';

import { BreadCrumb } from '@/components/ui/Common/BreadCrumb';

import { CheckoutProvider } from '../../../../contexts/Checkout/CheckoutContext';
import BillingForm from '../BillingForm/BillingForm';
import OrderSummary from '../OrderSummary/OrderSummary';

// import type { PaymentMethod } from './Checkout.type';

// const paymentMethods: PaymentMethod[] = [
//   { id: 'bank', label: 'Bank' },
//   { id: 'cash', label: 'Cash on delivery' },
// ];

export default function Checkout() {
  // state
  const [selectedAddress, setSelectedAddress] = useState<string>('');

  // memorize
  const breadcrumbs = useMemo(
    () => [
      { label: 'View Cart', href: '/cart' },
      { label: 'CheckOut', href: '/' },
    ],
    []
  );

  // const [selectedPayment, setSelectedPayment] = useState<string>('cash');
  // const [couponCode, setCouponCode] = useState('');

  // const subtotal = sampleData.reduce(
  //   (sum, item) => sum + item.price * item.quantity,
  //   0
  // );
  // const shipping = 0; // Free shipping
  // const total = subtotal + shipping;

  // const handlePlaceOrder = () => {
  // onSubmit({
  //   ...billingData,
  //   paymentMethod: selectedPayment,
  //   couponCode: couponCode || undefined
  // });
  // };

  // const handleApplyCoupon = () => {
  // setCouponCode(code);
  // Implement coupon logic here
  // };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BreadCrumb breadCrumbList={breadcrumbs} />

      <h1 className="text-2xl font-semibold mb-8">Billing Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <BillingForm
          selectedAddress={selectedAddress}
          setSelectedAddress={setSelectedAddress}
        />

        <CheckoutProvider value={selectedAddress}>
          <OrderSummary />
        </CheckoutProvider>
      </div>
    </div>
  );
}
