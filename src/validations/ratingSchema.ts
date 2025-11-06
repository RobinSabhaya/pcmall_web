import { z } from 'zod';

export const createUpdateRatingSchema = z.object({
  rating: z.number(),
  message: z.string(),
});
