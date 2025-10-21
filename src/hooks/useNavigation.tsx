'use client';

import { useEffect, useState } from 'react';

import { usePathname } from 'next/navigation';

export const useNavigation = () => {
  // state
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const pathname = usePathname();

  useEffect(() => {
    function handleStart() {
      setIsLoading(true);
    }

    function handleEnd() {
      setIsLoading(false);
    }

    window.addEventListener('beforeunload', handleStart);

    return () => {
      window.removeEventListener('beforeunload', handleEnd);
    };
  }, [pathname]);

  return {
    isLoading,
  };
};
