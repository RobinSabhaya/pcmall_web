'use client';

import { useEffect, useState } from 'react';

import BreadCrumb from '@/components/ui/BreadCrumb/BreadCrumb';
import Button from '@/components/ui/Button/Button';

import { useGetAllCart } from '../../../../hooks/query/Cart/useCartMutation';
import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';

import type { CartSummaryType } from './Cart.type';
import { breadcrumbs, calculatePayout } from './utils';

export default function Cart() {
  const initialData: CartSummaryType = {
    shipping: 0,
    subtotal: 0,
    total: 0,
  };

  const [isCartItemChange, setIsCartItemChange] = useState<number>(0);
  const [cartSummaryData, setCartSummaryData] =
    useState<CartSummaryType>(initialData);

  const { data } = useGetAllCart();
  const items = data?.items?.results;

  useEffect(() => {
    if (items && items?.length > 0) {
      const { shipping, subtotal, total } = calculatePayout(items);

      setCartSummaryData(() => ({
        shipping,
        subtotal,
        total,
      }));
    }

    return () => {
      setCartSummaryData(initialData);
    };
  }, [isCartItemChange, items]);

  // TODO: handle cart empty

  // TODO: handle loading state

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
                {items?.map(item => (
                  <CartItem
                    key={item._id}
                    item={item}
                    setIsCartItemChange={setIsCartItemChange}
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
          </div>
        </div>

        <div>
          <CartSummary cartSummaryData={cartSummaryData} />
        </div>
      </div>
    </div>
  );
}
