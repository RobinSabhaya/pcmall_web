import type { paths } from '../../../types/api/generated';

export type CreateWishlistRequest =
  paths['/v1/wishlist/create-update']['post']['requestBody']['content']['application/json'];
export type CreateWishlistResponse =
  paths['/v1/wishlist/create-update']['post']['responses']['200']['content']['application/json'];
