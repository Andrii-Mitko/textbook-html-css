import { z } from 'zod';

export const progressSchema = z.object({
  tutorialId: z.string().min(1),
  lessonId: z.string().min(1),
});

export type ProgressInput = z.infer<typeof progressSchema>;
