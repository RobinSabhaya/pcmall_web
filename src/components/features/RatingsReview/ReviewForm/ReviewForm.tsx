'use client';

import { useState } from 'react';

import { useForm } from '@tanstack/react-form';

import { useCreateUpdateRating } from '../../../../hooks/query/Rating/useRatingMutations';
import { createUpdateRatingSchema } from '../../../../validations/ratingSchema';
import { Button, TextArea } from '../../../ui/Common';

import type { ReviewForm, ReviewFormProp } from './ReviewForm.type';

export default function ReviewForm({ productId, setShowForm }: ReviewFormProp) {
  // state
  const [rating, setRating] = useState(3);
  // Tanstack query
  const { mutate: onReviewSubmit } = useCreateUpdateRating();

  const defaultValues = {
    message: '',
    rating: 1,
  };

  const onSubmit = ({ value }: { value: ReviewForm }) => {
    onReviewSubmit({
      productId,
      rating,
      message: value.message,
    });

    setShowForm(false);
  };

  const form = useForm({
    defaultValues,
    validators: {
      onChange: createUpdateRatingSchema,
    },
    onSubmit,
  });

  return (
    <div className="bg-light-200 rounded-lg p-6 space-y-4">
      <h4 className="font-semibold text-dark-900">Write a Review</h4>

      <form
        onSubmit={e => {
          e.preventDefault();
          e.stopPropagation();
          form.handleSubmit();
        }}
      >
        <div className="space-y-3">
          <label className="text-sm font-medium text-brand-secondary">
            Rating
          </label>
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map(star => (
              <button
                key={star}
                type="button"
                onClick={() => setRating(star)}
                className={`w-8 h-8 ${
                  star <= rating ? 'text-yellow-400' : 'text-light-400'
                } hover:text-yellow-400 transition-colors text-3xl`}
              >
                ★
              </button>
            ))}
          </div>

          <form.Field name="message">
            {field => (
              <TextArea
                label="Enter message"
                value={field.state.value}
                onChange={e => field.handleChange(e.target.value)}
                placeholder="Enter message"
              />
            )}
          </form.Field>

          <div className="flex gap-3">
            <Button type="submit" variant="primary" size="sm">
              Submit Review
            </Button>
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => {
                setShowForm(false);
              }}
            >
              Cancel
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
}
