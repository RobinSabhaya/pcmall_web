import { z } from 'zod';

import { emailSchema, passwordSchema } from './commonSchema';

export const signupSchema = z.object({
  first_name: z.string().nonempty('First name is required'),
  email: emailSchema,
  password: passwordSchema,
  confirm_password: passwordSchema,
});

export const loginSchema = z.object({
  email: emailSchema,
  password: passwordSchema,
});
