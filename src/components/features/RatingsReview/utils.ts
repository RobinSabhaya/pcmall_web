import type { Review } from './RatingsReview.type';
import type { RatingDistribution, RatingStarKey } from './utils.type';

export const sortByRating = [
  'Newest',
  'Oldest',
  'Highest Rating',
  'Lowest Rating',
].map(rating => ({
  label: rating,
  value: rating,
}));

export const sortedReviews = (reviewList: Review[], sortBy: string) =>
  reviewList.sort((a, b) => {
    switch (sortBy) {
      case 'newest':
        return (
          new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
        );
      case 'oldest':
        return (
          new Date(a.updatedAt).getTime() - new Date(b.updatedAt).getTime()
        );
      case 'highest':
        return b.rating - a.rating;
      case 'lowest':
        return a.rating - b.rating;
      default:
        return 0;
    }
  });

const starMapping: { id: number; value: RatingStarKey }[] = [
  {
    id: 5,
    value: 'five_star',
  },
  {
    id: 4,
    value: 'four_star',
  },
  {
    id: 3,
    value: 'three_star',
  },
  {
    id: 2,
    value: 'two_star',
  },
  {
    id: 1,
    value: 'one_star',
  },
];

export const ratingDistribution = ({ ratingCount }: RatingDistribution) => {
  const total = ratingCount?.rating_count ?? 0;

  return starMapping.map(star => {
    const count = ratingCount[star.value] ?? 0;

    return {
      star: star.id,
      count,
      percentage: total > 0 ? (count / total) * 100 : 0,
    };
  });
};
