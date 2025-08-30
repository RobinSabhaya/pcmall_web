import Image from 'next/image';

import CategoryBrowser from '@/components/ui/Category';
import FlashSales from '@/components/ui/FlashSale';
import ProductList from '@/components/ui/Product/ProductList';
import Services from '@/components/ui/Services';
import Sidebar from '@/components/ui/Sidebar';
import Swiper, { SAMPLE_SLIDES } from '@/components/ui/Swiper';
import Title from '@/components/ui/Title/Title';
import musicBannerImage from '@/public/music_banner.svg';

export default function Home() {
  let endDate: Date = new Date();
  // Set end date to 3 days, 23 hours, 19 minutes, 56 seconds from now
  if (typeof window !== 'undefined') {
    endDate = new Date(
      Date.now() +
        3 * 24 * 60 * 60 * 1000 +
        23 * 60 * 60 * 1000 +
        19 * 60 * 1000 +
        56 * 1000
    );
  }

  return (
    <>
      <div className="flex justify-center items-center flex-col-reverse my-3 mx-6 lg:flex-row">
        <div className="w-[20%] hidden lg:visible">
          <Sidebar />
        </div>

        <div className="w-[80%]">
          <Swiper slides={SAMPLE_SLIDES} />
        </div>
      </div>

      {/* Sample products */}
      <Title title="All Products" />

      <FlashSales endDate={endDate} className="mx-6" />

      <div className="flex justify-center items-center gap-4 mx-6 my-4 flex-col lg:flex-row">
        <ProductList />
      </div>

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
      <Services className="py-8 bg-gray-100" />
    </>
  );
}
