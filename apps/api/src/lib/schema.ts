import { z } from 'zod';

export const createTemplateSchema = z.object({
  name: z.string(),
  description: z.string(),
  imageId: z.string(),
});

export const updateTemplateSchema = createTemplateSchema.partial();
