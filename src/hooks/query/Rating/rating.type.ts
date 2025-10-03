import type { paths } from '../../../types/api/generated';

export type GetRatingsParams =
  paths['/v1/rating/all']['get']['parameters']['query'];
export type GetRatingsResponse =
  paths['/v1/rating/all']['get']['responses']['200']['content']['application/json'];
export type GetRatingCountParams =
  paths['/v1/rating/count']['get']['parameters']['query'];
export type GetRatingCountResponse =
  paths['/v1/rating/count']['get']['responses']['200']['content']['application/json'];
