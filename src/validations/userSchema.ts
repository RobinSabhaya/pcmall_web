import z from 'zod';

export const editProfileSchema = z.object({
  first_name: z.string().nonempty(),
  last_name: z.string().nonempty(),
  email: z.email().nonempty(),
});
