import Link from 'next/link';

import Button from '../Button/Button';

import type { NotFoundProps } from './NotFound.type';

export default function NotFound({
  title = '404 Not Found',
  message = 'Your visited page not found. You may go home page.',
  buttonText = 'Back to home page',
  buttonHref = '/',
}: NotFoundProps) {
  return (
    <div className="min-h-screen bg-light-100 max-w-7xl mx-auto px-4 py-8">
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="text-center max-w-md w-full">
          <h1 className="text-[72px] leading-[78px] font-bold text-dark-900 mb-6 font-raleway">
            {title}
          </h1>

          <p className="text-body text-dark-700 mb-8 font-inter">{message}</p>

          <Link href={buttonHref}>
            <Button variant="primary" size="lg" className="px-8">
              {buttonText}
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
