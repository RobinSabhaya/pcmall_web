import type { MetadataRoute } from 'next';

import type { productType } from '../components/features/Product/ProductCard/ProductCard.type';
import { API_URL, BASE_URL } from '../config';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // For Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
    },
    {
      url: `${BASE_URL}/about`,
    },
    {
      url: `${BASE_URL}/product`,
    },
    {
      url: `${BASE_URL}/contact`,
    },
    {
      url: `${BASE_URL}/cart`,
    },
    {
      url: `${BASE_URL}/checkout`,
    },
    {
      url: `${BASE_URL}/account`,
    },
    {
      url: `${BASE_URL}/orders`,
    },
    {
      url: `${BASE_URL}/wishlist`,
    },
    {
      url: `${BASE_URL}/auth/sign-in`,
    },
    {
      url: `${BASE_URL}/auth/sign-up`,
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
    })
  );

  dynamicRoutes.push(...productRoutes);

  return [...staticRoutes, ...dynamicRoutes];
}
