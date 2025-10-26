import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'PCMall',
    short_name: 'PCMall',
    description: 'PCMall',
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
