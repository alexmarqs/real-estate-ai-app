import { NextRequest } from 'next/server';
import { z } from 'zod';
import { generationRequestSchema } from './schemas';

export type GenerateRequestParams = z.infer<typeof generationRequestSchema>;

export type CreateCompletionParams = {
  model: string;
  temperature: number;
  top_p: number;
  frequency_penalty: number;
  presence_penalty: number;
  max_tokens: number;
  stream?: boolean;
  n: number;
  user?: string;
  messages: ChatGPTMessage[];
};

// Typically, a conversation is formatted with a system message first, followed by alternating user and assistant messages.
// The system message helps set the behavior of the assistant.
type ChatGPTMessage = {
  role: 'user' | 'system' | 'assistant';
  content: string;
};

export type EdgeHandler = (req: NextRequest) => Promise<Response>;
