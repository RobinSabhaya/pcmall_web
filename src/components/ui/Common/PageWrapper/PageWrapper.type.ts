import type { CSSProperties, ReactNode } from 'react';

export interface PageWrapperProps {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
}
