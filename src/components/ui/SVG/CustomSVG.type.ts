import type { ReactNode } from 'react';

export interface CustomSVGProps {
  className?: string;
  fillColor?: string;
  stroke?: string;
  viewBox?: string;
  children: ReactNode;
}
