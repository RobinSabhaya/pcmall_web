import type { Metadata } from 'next';

import AccountLayout from '@/components/features/Account/AccountLayout/AccountLayout';

// SEO
export const metadata: Metadata = {
  title: 'Account',
};

export default function AccountPage() {
  return <AccountLayout />;
}
