import type { Metadata } from 'next';

import AuthForm from '../../../components/features/Auth/Auth';

// SEO
export const metadata: Metadata = {
  title: 'Sign In',
};

function page() {
  return (
    <>
      <AuthForm mode="sign-in" />
    </>
  );
}

export default page;
