import { forwardRef } from 'react';

import type { InputProps } from './Input.type';

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {label}
          </label>
        )}
        <input
          className={`w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 focus:border-transparent ${
            error ? 'border-brand-primary' : ''
          } ${className}`}
          ref={ref}
          {...props}
        />
        {error && <p className="text-sm text-brand-primary">{error}</p>}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
