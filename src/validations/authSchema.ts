import { z } from 'zod';

export type SignupSchema = z.infer<typeof signupSchema>;
export type LoginSchema = z.infer<typeof loginSchema>;

export const signupSchema = z.object({
  first_name: z.string().nonempty(),
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty(),
  confirm_password: z.string().min(8).nonempty(),
});

export const loginSchema = z.object({
  email: z.string().email().nonempty(),
  password: z.string().min(8).nonempty(),
});
