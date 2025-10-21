import Link from 'next/link';

import Button from '../Button/Button';

import type { EmptyStateProps } from './EmptyState.type';
import { defaultIcon } from './utils';

export default function EmptyState({
  title = 'No Products Found',
  message = "We couldn't find any products matching your criteria. Try adjusting your filters or browse our categories.",
  buttonText = 'Browse Products',
  buttonHref = '/products',
  onButtonClick,
  icon,
  className = '',
}: EmptyStateProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center py-16 px-4 text-center ${className}`}
    >
      <div className="mb-6">{icon ?? defaultIcon}</div>

      <h3 className="text-[24px] leading-[30px] font-medium text-dark-900 mb-3">
        {title}
      </h3>

      <p className="text-[16px] leading-[24px] text-dark-700 mb-8 max-w-md">
        {message}
      </p>

      {onButtonClick ? (
        <Button
          onClick={onButtonClick}
          variant="primary"
          size="md"
          className="px-6"
        >
          {buttonText}
        </Button>
      ) : (
        <Link href={buttonHref}>
          <Button variant="primary" size="md" className="px-6">
            {buttonText}
          </Button>
        </Link>
      )}
    </div>
  );
}
