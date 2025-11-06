import type { paths } from '../../../types/api/generated';

export type GetRatingsParams =
  paths['/v1/rating/all']['get']['parameters']['query'];
export type GetRatingsResponse =
  paths['/v1/rating/all']['get']['responses']['200']['content']['application/json']['data'];
export type GetRatingCountParams =
  paths['/v1/rating/count']['get']['parameters']['query'];
export type GetRatingCountResponse =
  paths['/v1/rating/count']['get']['responses']['200']['content']['application/json']['data'];

export type CreateUpdateRatingRequest =
  paths['/v1/rating/create-update']['post']['requestBody']['content']['application/json'];

export type CreateUpdateRatingResponse =
  paths['/v1/rating/create-update']['post']['responses']['200']['content']['application/json']['data'];
