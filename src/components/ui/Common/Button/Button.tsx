import { forwardRef } from 'react';

import { Spinner } from '../Shadcn/spinner';

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
        className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className} disabled:cursor-not-allowed`}
        ref={ref}
        {...props}
      >
        {loading ? <Spinner /> : children}
      </button>
    );
  }
);

Button.displayName = 'Button';
export default Button;
