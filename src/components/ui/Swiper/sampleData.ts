import { generateNElemArr } from '../../../utils';

import type { SlideData } from './Swiper.type';
const SLIDES_COUNT = 5;

export const SAMPLE_SLIDES: SlideData[] = generateNElemArr(SLIDES_COUNT).map(
  i => ({
    image: `/images/swiper/slide${i + 1}.jpg`,
  })
);
