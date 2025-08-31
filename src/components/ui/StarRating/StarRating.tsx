import StarIcon from './StarIcon/StarIcon';
import type { StarRatingProps } from './StarRating.type';

export default function StarRating({
  ratingCount = 5,
  rating,
}: StarRatingProps) {
  return (
    <>
      {[...Array(ratingCount)].map((_, i) => (
        <StarIcon index={i} rating={rating} key={i} />
      ))}
    </>
  );
}
