import { StarRating } from '../../../ui/StarRating';
import type { Review } from '../RatingsReview.type';

export default function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border border-light-300 rounded-lg p-4 bg-light-100">
      <div className="flex items-start justify-between mb-3">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <StarRating rating={review.rating} />
            <span className="text-xs bg-green text-white px-2 py-1 rounded">
              Verified
            </span>
          </div>
          <h5 className="font-semibold text-dark-900">{review.message}</h5>
        </div>
        <span className="text-sm text-dark-500">
          {new Date(review.createdAt).toLocaleDateString()}
        </span>
      </div>

      <div className="text-sm text-dark-500">By {review.user}</div>
    </div>
  );
}
