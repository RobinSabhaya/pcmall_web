import { useEffect } from 'react';

import type { useOutSideCloseProp } from './useCommon.type';

export const useOutSideClose = ({ ref, onClose }: useOutSideCloseProp) => {
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (ref.current && !ref?.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose, ref]);
};
