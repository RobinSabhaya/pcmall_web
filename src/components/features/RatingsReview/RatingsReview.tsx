'use client';

import { useState } from 'react';

import {
  useGetAllRatingCount,
  useGetAllRatings,
} from '../../../hooks/query/Rating/useRatingMutations';
import { Button, Select } from '../../ui/Common';

import type { RatingsReviewProps } from './RatingsReview.type';
import RatingSummary from './RatingSummary/RatingSummary';
import ReviewCard from './ReviewCard/ReviewCard';
import ReviewForm from './ReviewForm/ReviewForm';
import { sortByRating } from './utils';

export default function RatingsReview({ productId }: RatingsReviewProps) {
  // state
  const [showForm, setShowForm] = useState(false);
  const [sortBy, setSortBy] = useState<string>('newest');

  // Tanstack query
  const { data: ratingData, isLoading } = useGetAllRatings({
    productId,
  });

  const { data: ratingCountData } = useGetAllRatingCount({
    productId,
  });

  const reviewList = ratingData?.results;

  if (isLoading) return 'Loading.......';

  return (
    <div className="space-y-6">
      {/* Rating Summary */}
      {ratingCountData?.ratingCount && (
        <RatingSummary ratingCountData={ratingCountData.ratingCount} />
      )}

      {/* Review Form Toggle */}
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold text-dark-900">
          Customer Reviews
        </h3>
        <Button
          variant="primary"
          size="sm"
          onClick={() => setShowForm(!showForm)}
        >
          {showForm ? 'Cancel' : 'Write Review'}
        </Button>
      </div>
      {/* Review Form */}
      {showForm && (
        <ReviewForm setShowForm={setShowForm} productId={productId} />
      )}
      {/* Sort Controls */}
      {reviewList && reviewList?.length > 0 && (
        <div className="flex items-center gap-4">
          <span className="text-black">Sort by:</span>
          <Select
            options={sortByRating}
            value={sortBy}
            onChange={value => {
              setSortBy(value);
            }}
          />
        </div>
      )}
      {/* Reviews List */}
      <div className="space-y-4">
        {reviewList && reviewList.length > 0 ? (
          reviewList.map(review => (
            <ReviewCard key={review._id} review={review} />
          ))
        ) : (
          <div className="text-center py-8 text-black">
            No reviews yet. Be the first to review!
          </div>
        )}
      </div>
    </div>
  );
}
