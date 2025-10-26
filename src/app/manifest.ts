import type { MetadataRoute } from 'next';

import { APP_NAME } from '../config';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: APP_NAME!,
    short_name: APP_NAME!,
    description: APP_NAME!,
    start_url: '/',
    display: 'standalone',
    background_color: '#fff',
    theme_color: '#fff',
    icons: [
      {
        src: '/favicon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/apple-icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
      {
        src: '/icon.ico',
        sizes: 'any',
        type: 'image/x-icon',
      },
    ],
  };
}
