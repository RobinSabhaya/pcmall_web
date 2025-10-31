import type { MetadataRoute } from 'next';

import type { productType } from '../components/features/Product/ProductCard/ProductCard.type';
import { API_URL, BASE_URL } from '../config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // For Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/product`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/cart`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/checkout`,
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 0.5,
    },
    {
      url: `${BASE_URL}/account`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/orders`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/wishlist`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/auth/sign-in`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
    {
      url: `${BASE_URL}/auth/sign-up`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.4,
    },
  ];

  // For Dynamic routes
  const dynamicRoutes: MetadataRoute.Sitemap = [];

  // TODO: need to add Promise.all later
  const response = await fetch(`${API_URL}product/all`);
  const data = await response.json();
  const products = data?.data?.productData?.results ?? [];

  const productRoutes: MetadataRoute.Sitemap = products.map(
    (product: productType) => ({
      url: `${BASE_URL}/product/${product.slug}`,
      lastModified: product.updatedAt ?? new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  );

  dynamicRoutes.push(...productRoutes);

  return [...staticRoutes, ...dynamicRoutes];
}
