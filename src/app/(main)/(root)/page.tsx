import type { Metadata } from 'next';

import PageWrapper from '@/components/ui/Common/PageWrapper';

import CategoryBrowser from '../../../components/features/Category';
import ProductSection from '../../../components/features/Product/ProductSection';
import Services from '../../../components/features/Services/Services';
import HorizontalLine from '../../../components/ui/Common/HorizontalLine';
import NewArrival from '../../../components/ui/NewArrival/NewArrival';
import Sidebar from '../../../components/ui/Sidebar/Sidebar';
import { SAMPLE_SLIDES } from '../../../components/ui/Swiper';
import Swiper from '../../../components/ui/Swiper/Swiper';
import { APP_NAME } from '../../../config';

// SEO
export const metadata: Metadata = {
  title: 'Home',
  description: `Shop online at ${APP_NAME}, India's trusted e-commerce platform. Explore a wide range of electronics, fashion, and home products at affordable prices with fast delivery and secure checkout.`,
};

export default function Home() {
  return (
    <>
      <div className="flex items-center lg:items-start flex-col-reverse my-4 lg:mx-18 mx-4 lg:flex-row">
        <div className="w-[20%] hidden lg:flex">
          <Sidebar />
        </div>

        <div className="md:w-[75%] w-full">
          <Swiper slides={SAMPLE_SLIDES} />
        </div>
      </div>

      <PageWrapper className="lg:mx-22 mx-4">
        <ProductSection />

        <HorizontalLine className="mt-10" />

        {/* Category browser section */}
        <CategoryBrowser />

        <HorizontalLine className="mt-10" />

        <NewArrival />

        <HorizontalLine className="mt-10" />

        {/* services */}
        <Services className="py-16 my-5" />
      </PageWrapper>
    </>
  );
}
