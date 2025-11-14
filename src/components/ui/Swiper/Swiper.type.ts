export interface SlideData {
  image: string;
  link?: string;
}

export interface SwiperProps {
  slides: SlideData[];
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
}
