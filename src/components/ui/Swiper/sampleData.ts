import slide1 from '@/public/iphone14.svg';
import slide2 from '@/public/music_banner.svg';

import type { SlideData } from './Swiper.type';

export const SAMPLE_SLIDES: SlideData[] = [
  {
    id: '1',
    title: 'Up to 10% off Voucher',
    subtitle: 'iPhone 14 Series',
    description: 'Get the latest iPhone with amazing discounts',
    buttonText: 'Shop Now',
    buttonLink: '/products/iphone',
    image: slide1,
    backgroundColor: '#000000',
  },
  {
    id: '2',
    title: 'Summer Collection',
    subtitle: 'Fashion 2024',
    description: 'Discover the hottest trends this season',
    buttonText: 'Explore',
    buttonLink: '/collections/summer',
    image: slide2,
    backgroundColor: '#1a1a1a',
  },
];
