import type { paths } from '../../../types';

export type GetRatingCountResponse =
  paths['/v1/rating/count']['get']['responses']['200']['content']['application/json']['data']['ratingCount'];

export interface RatingDistribution {
  ratingCount: GetRatingCountResponse;
}

export type RatingStarKey =
  | 'five_star'
  | 'four_star'
  | 'three_star'
  | 'two_star'
  | 'one_star';
