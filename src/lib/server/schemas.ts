import { AUDIENCES, MOODS, PROPERTY_TYPES } from '@/utils/options';
import { z } from 'zod';

export const generationRequestSchema = z.object({
  propertyType: z.enum(PROPERTY_TYPES),
  description: z.string(),
  targetAudience: z.enum(AUDIENCES),
  mood: z.enum(MOODS),
});
