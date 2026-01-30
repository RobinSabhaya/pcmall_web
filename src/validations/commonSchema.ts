import z from 'zod';

export const passwordSchema = z
  .string()
  .nonempty('Password is required')
  .min(8, 'Password must be 8 characters long');

export const emailSchema = z
  .string()
  .nonempty('Email is required')
  .email('Invalid email');
