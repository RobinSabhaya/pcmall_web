import type { Metadata } from 'next';

import AuthForm from '../../../components/features/Auth/Auth';

// SEO
export const metadata: Metadata = {
  title: 'Sign Up',
};

function page() {
  return (
    <>
      <AuthForm mode="sign-up" />
    </>
  );
}

export default page;
