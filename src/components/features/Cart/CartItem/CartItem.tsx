'use client';

import { useState } from 'react';

import Image from 'next/image';

import {
  useRemoveToCart,
  useUpdateToCart,
} from '../../../../hooks/query/Cart/useCartMutation';
import { successMessage } from '../../../../hooks/useToaster';
import { formatPrice } from '../../../../utils/custom';
import QuantitySelector from '../QuantitySelector/QuantitySelector';

import type { CartItemProps } from './CartItem.type';

export default function CartItem({ item, setIsCartItemChange }: CartItemProps) {
  // state
  const [quantity, setQuantity] = useState(item.quantity);

  // variables
  const cartProductVariant = item?.product_variants;
  const cartProduct = item?.product;
  const cartProductSkus = item?.product_variants?.product_skus[0];

  // Tanstack query
  const { mutate: updateToCart } = useUpdateToCart();
  const { mutate: removeToCart } = useRemoveToCart();

  function onUpdateQuantity(quantity: number) {
    updateToCart({
      cartId: item?._id,
      quantity,
    });
    setIsCartItemChange(() => quantity);
  }

  function onRemoveToCart() {
    removeToCart({
      cartId: item?._id,
    });

    setIsCartItemChange(() => quantity);
    successMessage('Cart removed successfully');
  }
  return (
    <tr className="border-b border-gray-200">
      <td className="py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onRemoveToCart()}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            ✕
          </button>
          <div className="w-16 h-16 relative">
            {cartProductVariant?.images?.length > 0 && (
              <Image
                src={cartProductVariant.images[0] as string}
                alt={cartProductVariant.name}
                fill
                className="object-cover rounded"
              />
            )}
          </div>
          <span className="font-medium">{cartProduct?.title}</span>
        </div>
      </td>
      {cartProductSkus?.price && (
        <td className="py-4 text-center">
          ₹ {formatPrice(cartProductSkus?.price)}
        </td>
      )}
      <td className="py-4 text-center">
        <QuantitySelector
          value={item.quantity}
          onChange={quantity => {
            onUpdateQuantity(quantity);
            setQuantity(quantity);
          }}
        />
      </td>
      {cartProductSkus?.price && (
        <td className="py-4 text-center font-medium">
          ₹ {formatPrice(cartProductSkus.price * quantity)}
        </td>
      )}
    </tr>
  );
}
