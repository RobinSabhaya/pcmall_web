import type { paths } from '@/types/api/generated';

// Product types
export type GetProductsParams =
  paths['/v1/product/all']['get']['parameters']['query'];
export type GetProductsResponse =
  paths['/v1/product/all']['get']['responses']['200']['content']['application/json'];

export type CreateProductRequest =
  paths['/v1/product/create-update']['post']['requestBody']['content']['application/json'];
export type CreateProductResponse =
  paths['/v1/product/create-update']['post']['responses']['200']['content']['application/json'];

export type GenerateSkuRequest =
  paths['/v1/product/generate-sku']['post']['requestBody']['content']['application/json'];
export type GenerateSkuResponse =
  paths['/v1/product/generate-sku']['post']['responses']['200']['content']['application/json'];
