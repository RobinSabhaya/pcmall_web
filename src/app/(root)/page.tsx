import Image from 'next/image';

import CategoryBrowser from '@/components/features/Category';
import Services from '@/components/features/Services';
import Sidebar from '@/components/ui/Sidebar';
import Swiper, { SAMPLE_SLIDES } from '@/components/ui/Swiper';
import musicBannerImage from '@/public/svg/banners/music_banner.svg';

import ProductSection from '../../components/features/Product/ProductSection/ProductSection';
import PageWrapper from '../../components/ui/Common/PageWrapper';

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

      <PageWrapper className="lg:mx-20">
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

        {/* services */}
        <Services className="py-8" />
      </PageWrapper>
    </>
  );
}
