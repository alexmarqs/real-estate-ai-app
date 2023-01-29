import { OPENAI_API_KEY } from '@/utils/env-vars';
import { APIError } from './error';
import { CreateCompletionParams } from './types';

const OPEN_AI_BASE_URL = 'https://api.openai.com/v1';

export const createCompletion = async (payload: CreateCompletionParams) => {
  const res = await fetch(`${OPEN_AI_BASE_URL}/completions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new APIError(res.status, res.statusText);
  }

  const data = await res.json();

  return data?.choices[0]?.text;
};
