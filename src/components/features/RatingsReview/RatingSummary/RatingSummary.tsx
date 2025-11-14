import { StarRating } from '../../../ui/StarRating';
import { ratingDistribution } from '../utils';

import type { RatingSummaryProps } from './RatingSummary.type';

export default function RatingSummary({ ratingCountData }: RatingSummaryProps) {
  const averageRating = ratingCountData?.avg_rating;

  return (
    <div className="bg-light-200 rounded-lg p-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="text-center md:text-left">
          <div className="text-4xl font-bold text-brand-secondary">
            {averageRating?.toFixed(1)}
          </div>
          <div className="flex items-center justify-center md:justify-start gap-1 mt-1">
            {averageRating && <StarRating rating={Math.round(averageRating)} />}
          </div>
          <div className="text-brand-secondary mt-1">
            {ratingCountData?.rating_count ?? 0} reviews
          </div>
        </div>

        {ratingCountData && (
          <div className="flex-1 space-y-2">
            {ratingDistribution({
              ratingCount: ratingCountData,
            }).map(({ star, count, percentage }) => (
              <div key={star} className="flex items-center gap-3">
                <span className="text-sm text-dark-700 w-8">{star}★</span>
                <div className="flex-1 bg-light-300 rounded-full h-2">
                  <div
                    className="bg-yellow-400 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
                <span className="text-sm text-brand-secondary w-8">
                  {count}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
