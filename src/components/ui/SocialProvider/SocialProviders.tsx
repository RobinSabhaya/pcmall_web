import Image from 'next/image';

import Apple from '@/public/svg/social/apple.svg';
import Google from '@/public/svg/social/google.svg';

import type { SocialProviderProps } from './SocialProvider.type';

export default function SocialProviders({
  variant = 'sign-in',
}: SocialProviderProps) {
  return (
    <div className="space-y-3">
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body-medium text-dark-900 hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
        aria-label={`${variant === 'sign-in' ? 'Continue' : 'Sign up'} with Google`}
      >
        <Image src={Google} alt="" width={18} height={18} />
        <span>Continue with Google</span>
      </button>
      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-light-300 bg-light-100 px-4 py-3 text-body-medium text-dark-900 hover:bg-light-200 focus:outline-none focus:ring-2 focus:ring-dark-900/10"
        aria-label={`${variant === 'sign-in' ? 'Continue' : 'Sign up'} with Apple`}
      >
        <Image src={Apple} alt="" width={18} height={18} />
        <span>Continue with Apple</span>
      </button>
    </div>
  );
}
