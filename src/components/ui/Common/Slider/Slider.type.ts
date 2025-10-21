import type { CSSProperties } from 'react';

export interface SliderProps {
  className?: string;
  style?: CSSProperties;
  maxIndex: number;
  currentIndex: number;
  prev: () => void;
  next: () => void;
}
