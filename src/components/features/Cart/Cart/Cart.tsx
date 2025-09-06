'use client';

// import { useState } from 'react';

import BreadCrumb from '@/components/ui/BreadCrumb/BreadCrumb';
import Button from '@/components/ui/Button/Button';

import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';

import { cartData } from './sampleData';

export default function Cart() {
  const { items } = cartData;
  // const [couponCode, setCouponCode] = useState('');

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Cart', href: '/cart' },
  ];

  // const handleApplyCoupon = () => {
  //   if (couponCode.trim()) {
  //     // onApplyCoupon(couponCode.trim());
  //     setCouponCode('');
  //   }
  // };

  function onUpdateQuantity() {}

  function onUpdateCart() {}

  function onRemoveItem() {}

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <BreadCrumb breadCrumbList={breadcrumbs} />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left font-medium text-gray-900">
                    Product
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-gray-900">
                    Price
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-gray-900">
                    Quantity
                  </th>
                  <th className="px-6 py-4 text-center font-medium text-gray-900">
                    Subtotal
                  </th>
                </tr>
              </thead>
              <tbody>
                {items.map(item => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onUpdateQuantity={onUpdateQuantity}
                    onRemove={onRemoveItem}
                  />
                ))}
              </tbody>
            </table>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <Button
              variant="outline"
              onClick={() => window.history.back()}
              className="flex-1"
            >
              Return To Shop
            </Button>
            <Button variant="outline" onClick={onUpdateCart} className="flex-1">
              Update Cart
            </Button>
          </div>
        </div>

        <div>
          <CartSummary />
        </div>
      </div>
    </div>
  );
}
