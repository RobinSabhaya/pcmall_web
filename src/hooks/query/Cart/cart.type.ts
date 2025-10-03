import type { paths } from '@/types/api/generated';

export type AddToCartRequest =
  paths['/v1/cart/add']['post']['requestBody']['content']['application/json'];
export type AddToCartResponse =
  paths['/v1/cart/add']['post']['responses']['200']['content']['application/json'];

export type UpdateCartRequest =
  paths['/v1/cart/update']['put']['requestBody']['content']['application/json'];
export type UpdateCartResponse =
  paths['/v1/cart/update']['put']['responses']['200']['content']['application/json'];

export type RemoveToCartRequest =
  paths['/v1/cart/remove/{cartId}']['delete']['parameters']['path'];
export type RemoveToCartResponse =
  paths['/v1/cart/remove/{cartId}']['delete']['responses']['200']['content']['application/json'];

export type GetCartResponse =
  paths['/v1/cart/all']['get']['responses']['200']['content']['application/json']['data']['200']['data'];
