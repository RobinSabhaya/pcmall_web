import { z } from 'zod';

export const billingFormSchema = z.object({
  line1: z.string().nonempty(),
  line2: z.string(),
  state: z.string().nonempty(),
  city: z.string().nonempty(),
  country: z.string().nonempty(),
});
