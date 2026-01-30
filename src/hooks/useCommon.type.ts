import type { RefObject } from 'react';

export interface useOutSideCloseProp {
  ref: RefObject<HTMLDivElement | null>;
  onClose: () => void;
}
