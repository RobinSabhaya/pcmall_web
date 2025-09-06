'use client';

import { useState } from 'react';

import type { QuantityProps } from './QuantitySelector.type';

export default function QuantitySelector({
  value,
  onChange,
  min = 1,
  max = 99,
}: QuantityProps) {
  const [quantity, setQuantity] = useState(value);

  const handleChange = (newValue: number) => {
    if (newValue >= min && newValue <= max) {
      setQuantity(newValue);
      onChange(newValue);
    }
  };

  return (
    <div className="flex items-center bg-white border border-gray-200 rounded-lg shadow-sm w-fit">
      <button
        onClick={() => handleChange(quantity - 1)}
        disabled={quantity <= min}
        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-l-lg transition-colors"
      >
        −
      </button>
      <span className="w-12 h-8 flex items-center justify-center text-sm font-medium border-x border-gray-200">
        {quantity}
      </span>
      <button
        onClick={() => handleChange(quantity + 1)}
        disabled={quantity >= max}
        className="w-8 h-8 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed rounded-r-lg transition-colors"
      >
        +
      </button>
    </div>
  );
}
