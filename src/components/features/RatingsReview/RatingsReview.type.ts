import type { paths } from '../../../types';

export type Review =
  paths['/v1/rating/all']['get']['responses']['200']['content']['application/json']['data']['results'][0];

export interface RatingsReviewProps {
  productId: string;
}
