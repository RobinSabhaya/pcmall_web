import type { CSSProperties } from 'react';

export interface OurStoryProps {
  className?: string;
  style?: CSSProperties;
  title?: string;
  descriptions?: string[];
  imageUrl?: string;
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
