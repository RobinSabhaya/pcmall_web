import { forwardRef } from 'react';

import type { TextAreaProps } from './TextArea.type';

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = '', label, error, ...props }, ref) => {
    return (
      <div className="space-y-2">
        {label && (
          <label className="block text-sm font-medium text-brand-secondary">
            {label}
          </label>
        )}
        <textarea
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

TextArea.displayName = 'TextArea';
export default TextArea;
