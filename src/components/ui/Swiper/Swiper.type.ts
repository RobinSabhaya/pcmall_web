export interface SlideData {
  id: string;
  title: string;
  subtitle?: string;
  description: string;
  buttonText: string;
  buttonLink: string;
  image: string;
  backgroundColor?: string;
}

export interface SwiperProps {
  slides: SlideData[];
  className?: string;
  autoplay?: boolean;
  autoplayDelay?: number;
}
