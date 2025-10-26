import Image from 'next/image';

import type { Metadata } from 'next';

import PageWrapper from '@/components/ui/Common/PageWrapper';
import musicBannerImage from '@/public/svg/banners/music_banner.svg';

import CategoryBrowser from '../../../components/features/Category';
import ProductSection from '../../../components/features/Product/ProductSection';
import Services from '../../../components/features/Services/Services';
import NewArrival from '../../../components/ui/NewArrival/NewArrival';
import Sidebar from '../../../components/ui/Sidebar/Sidebar';
import { SAMPLE_SLIDES } from '../../../components/ui/Swiper';
import Swiper from '../../../components/ui/Swiper/Swiper';

// SEO
export const metadata: Metadata = {
  title: 'Home',
  description: 'Home page',
};

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center flex-col-reverse my-3 mx-6 lg:flex-row">
        <div className="w-[20%] hidden lg:flex">
          <Sidebar />
        </div>

        <div className="w-[70%]">
          <Swiper slides={SAMPLE_SLIDES} />
        </div>
      </div>

      <PageWrapper className="lg:mx-22">
        <ProductSection />

        {/* Category browser section */}
        <CategoryBrowser />

        {/* Banner image */}
        <div className="flex justify-center items-center my-4">
          <Image
            src={musicBannerImage}
            alt="music_banner"
            className="aspect-auto border rounded-xl"
          />
        </div>

        <div>
          <NewArrival />
        </div>

        {/* services */}
        <Services className="py-8" />
      </PageWrapper>
    </>
  );
}
