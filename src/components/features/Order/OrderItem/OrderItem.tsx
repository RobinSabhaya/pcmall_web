'use client';

import { useState } from 'react';

import Image from 'next/image';

import Button from '@/components/ui/Common/Button/Button';
import { capitalizeString, formatPrice } from '@/utils/custom';

import { PaymentStatus } from '../OrderList/utils';

import type { OrderItemProps } from './OrderItem.type';
import { formatDate, getStatusColor } from './utils';

export default function OrderItem({ order }: OrderItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white rounded-lg border border-light-300 hover:border-light-400 transition-colors duration-200">
      {/* Order Header */}
      <div className="p-6 border-b border-light-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div>
              <h3 className="font-medium text-dark-900">Order #{order._id}</h3>
              <p className="text-sm text-dark-500 mt-1">
                {formatDate(order.createdAt)}
              </p>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-xs font-medium border ${getStatusColor(
                order.status
              )}`}
            >
              {capitalizeString(order.status)}
            </span>
          </div>
          <div className="text-right">
            <p className="font-semibold text-dark-900">
              ₹ {formatPrice(order.totalAmount)}
            </p>
            <p className="text-sm text-dark-500">{order.items.length} items</p>
          </div>
        </div>
      </div>

      {/* Order Items Preview */}
      <div className="p-6">
        <div className="flex items-center space-x-4 mb-4">
          {order.items.slice(0, 3).map((item, index) => (
            <div key={item._id} className="relative">
              <Image
                src={item.images[0] as string}
                alt={item.name}
                width={60}
                height={60}
                className="rounded-lg object-cover"
              />
              {index === 2 && order.items.length > 3 && (
                <div className="absolute inset-0 bg-black/50 rounded-lg flex items-center justify-center">
                  <span className="text-white text-xs font-medium">
                    +{order.items.length - 3}
                  </span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Expanded Items */}
        {isExpanded && (
          <div className="space-y-3 mb-4 border-t border-light-200 pt-4">
            {order.items.map(item => (
              <div key={item._id} className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Image
                    src={item.images[0] as string}
                    alt={item.name}
                    width={40}
                    height={40}
                    className="rounded object-cover"
                  />
                  <div>
                    <p className="font-medium text-sm text-dark-900">
                      {item.name}
                    </p>
                    {/* {item.variant && (
                      <p className="text-xs text-dark-500">{item.variant}</p>
                    )} */}
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium">
                    ₹ {formatPrice(item.product_skus.price)}
                  </p>
                  <p className="text-xs text-dark-500">Qty: {item.quantity}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-dark-700 hover:text-dark-900"
          >
            {isExpanded ? 'Show Less' : 'View Items'}
          </Button>
          <div className="flex space-x-2">
            <Button
              variant="outline"
              size="sm"
              // onClick={() => onViewDetails?.(order.id)}
            >
              View Details
            </Button>
            {order.status === PaymentStatus.SUCCESS && (
              <Button
                variant="primary"
                size="sm"
                // onClick={() => onReorder?.(order.id)}
              >
                Reorder
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
