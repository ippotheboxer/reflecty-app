import { z } from 'zod';

// Schema for signing user in
export const signInFormSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters')
});

// Schema for signing up a user
export const signUpFormSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string().min(6, 'Confirm password must be at least 6 characters')
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ['confirmPassword'],
});

// Schema for creating a journal
export const journalFormSchema = z.object({
  userId: z.string().uuid({ message: 'Invalid user ID' }),
  typeName: z.string().min(1, { message: 'Journal type is required' }),
  title: z.string().min(1, { message: 'Title is required' }).max(100, { message: 'Title too long' }),
  content: z.string().min(1, { message: 'Content is required' }).max(5000, { message: 'Content too long' }),
});