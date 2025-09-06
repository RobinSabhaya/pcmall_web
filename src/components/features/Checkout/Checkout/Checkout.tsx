'use client';

import { useState } from 'react';

import { BreadCrumb } from '@/components/ui/BreadCrumb';

import BillingForm from '../BillingForm/BillingForm';
import type { BillingFormData } from '../BillingForm/BillingForm.type';
import OrderSummary from '../OrderSummary/OrderSummary';

import type { PaymentMethod } from './Checkout.type';
import { sampleData } from './sampleData';

const paymentMethods: PaymentMethod[] = [
  { id: 'bank', label: 'Bank' },
  { id: 'cash', label: 'Cash on delivery' },
];

export default function Checkout() {
  const [billingData, setBillingData] = useState<BillingFormData | null>(null);
  const [selectedPayment, setSelectedPayment] = useState<string>('cash');
  // const [couponCode, setCouponCode] = useState('');

  const subtotal = sampleData.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = 0; // Free shipping
  const total = subtotal + shipping;

  const breadcrumbs = [
    { label: 'View Cart', href: '/cart' },
    { label: 'CheckOut', href: '/' },
  ];

  const handleBillingSubmit = (data: BillingFormData) => {
    setBillingData(data);
  };

  const handlePlaceOrder = () => {
    if (!billingData) return;
    // onSubmit({
    //   ...billingData,
    //   paymentMethod: selectedPayment,
    //   couponCode: couponCode || undefined
    // });
  };

  const handleApplyCoupon = () => {
    // setCouponCode(code);
    // Implement coupon logic here
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BreadCrumb breadCrumbList={breadcrumbs} />

      <h1 className="text-2xl font-semibold mb-8">Billing Details</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <BillingForm onSubmit={handleBillingSubmit} />

        <OrderSummary
          items={sampleData}
          subtotal={subtotal}
          shipping={shipping}
          total={total}
          onApplyCoupon={handleApplyCoupon}
          paymentMethods={paymentMethods}
          selectedPayment={selectedPayment}
          onPaymentChange={setSelectedPayment}
          onPlaceOrder={handlePlaceOrder}
        />
      </div>
    </div>
  );
}
