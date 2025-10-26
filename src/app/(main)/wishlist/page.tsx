import type { Metadata } from 'next';

import WishlistSection from '../../../components/features/Wishlist/WishlistSection';
import PageWrapper from '../../../components/ui/Common/PageWrapper';

// SEO
export const metadata: Metadata = {
  title: 'Wishlist',
};

const WishlistPage = () => {
  return (
    <PageWrapper className="min-h-screen lg:mx-22 my-6">
      <WishlistSection />
    </PageWrapper>
  );
};

export default WishlistPage;
