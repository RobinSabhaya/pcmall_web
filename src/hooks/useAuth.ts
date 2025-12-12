'use client';

import { useEffect, useState } from 'react';

export async function checkAuth(): Promise<{
  success: boolean;
  message: string;
  data: { rt: string };
}> {
  const res = await fetch('/api/check-auth', {
    credentials: 'include',
  });

  const data = await res.json();

  return data;
}

export function useAuth() {
  const [authenticated, setAuthenticated] = useState(false);
  const [data, setData] = useState<{
    rt: string;
  }>({ rt: '' });

  useEffect(() => {
    (async () => {
      const data = await checkAuth();

      if (data.success) {
        setData({
          rt: data.data.rt,
        });
        setAuthenticated(true);
      }
    })();
  }, []);

  return { authenticated, data };
}
