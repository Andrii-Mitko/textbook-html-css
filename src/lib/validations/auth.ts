import { z } from 'zod';

export const registerSchema = z.object({
  name: z.string().trim().min(2, 'Мінімум 2 символи'),
  email: z.email('Некоректний email').toLowerCase(),
  password: z.string().min(8, 'Мінімум 8 символів'),
});

export type RegisterInput = z.infer<typeof registerSchema>;

export const loginSchema = z.object({
  email: z.email().toLowerCase(),
  password: z.string().min(1),
});
