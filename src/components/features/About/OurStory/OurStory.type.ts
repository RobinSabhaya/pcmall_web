import type { CSSProperties } from 'react';

import type { StaticImageData } from 'next/image';

export interface OurStoryProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
  descriptions?: string[];
  imageUrl?: StaticImageData;
  imageAlt?: string;
}

export interface StoryContent {
  title: string;
  descriptions: string[];
}

export interface StoryImage {
  url: string;
  alt: string;
}
