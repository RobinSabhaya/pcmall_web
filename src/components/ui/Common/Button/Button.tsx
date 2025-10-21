import { forwardRef } from 'react';

import IOSLoader from '../Loader/IOSLoader';

import type { ButtonProps } from './Button.type';
import { baseClasses, sizes, variants } from './utils';
const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className = '',
      variant = 'primary',
      size = 'md',
      children,
      loading,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
        ref={ref}
        {...props}
      >
        {loading ? <IOSLoader /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
