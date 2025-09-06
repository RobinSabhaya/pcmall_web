import Image from 'next/image';

import ProductImage from '@/public/images/products/product3.png';

import QuantitySelector from '../QuantitySelector/QuantitySelector';

import type { CartItemProps } from './CartItem.type';

export default function CartItem({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {
  return (
    <tr className="border-b border-gray-200">
      <td className="py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => onRemove(item.id)}
            className="text-red-500 hover:text-red-700 text-sm"
          >
            ✕
          </button>
          <div className="w-16 h-16 relative">
            <Image
              src={ProductImage}
              alt={item.name}
              fill
              className="object-cover rounded"
            />
          </div>
          <span className="font-medium">{item.name}</span>
        </div>
      </td>
      <td className="py-4 text-center">${item.price}</td>
      <td className="py-4 text-center">
        <QuantitySelector
          value={item.quantity}
          onChange={quantity => onUpdateQuantity(item.id, quantity)}
        />
      </td>
      <td className="py-4 text-center font-medium">
        ${item.price * item.quantity}
      </td>
    </tr>
  );
}
