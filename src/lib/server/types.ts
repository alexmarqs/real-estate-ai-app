import { NextRequest } from 'next/server';
import { z } from 'zod';
import { generationRequestSchema } from './schemas';

export type GenerateRequestParams = z.infer<typeof generationRequestSchema>;

export type CreateCompletionParams = {
  model: string;
  prompt: string;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream?: boolean;
  n: number;
  user?: string;
};

export type EdgeHandler = (req: NextRequest) => Promise<Response>;
