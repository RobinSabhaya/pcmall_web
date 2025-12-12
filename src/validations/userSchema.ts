import z from 'zod';

import { emailSchema } from './commonSchema';

export const editProfileSchema = z.object({
  first_name: z.string().nonempty('First name is required'),
  last_name: z.string().nonempty('Last name is required'),
  email: emailSchema,
});

export const addAddressSchema = z.object({
  line1: z.string().nonempty('Line1 is required'),
  line2: z.string().nonempty('Line2 is required'),
  state: z.string().nonempty('State is required'),
  city: z.string().nonempty('City is required'),
  country: z.string().nonempty('Country is required'),
});
