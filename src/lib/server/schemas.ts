import { z } from 'zod';

export const generationRequestSchema = z.object({
  propertyType: z.enum(['apartment', 'house', 'townhouse', 'condo', 'land']),
  description: z.string(),
  targetAudience: z
    .enum(['family', 'young professional', 'retiree', 'single', 'foreigner'])
    .optional(),
  mood: z.enum(['professional', 'friendly', 'informal']),
});
