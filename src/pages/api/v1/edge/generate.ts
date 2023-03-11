import { APIError } from '@/lib/server/error';
import { createCompletionWithStream } from '@/lib/server/openai-client';
import { generationRequestSchema } from '@/lib/server/schemas';
import { CreateCompletionParams, GenerateRequestParams } from '@/lib/server/types';
import type { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

export default async function handler(req: NextRequest) {
  try {
    if (req.method !== 'POST') {
      throw new APIError(405, 'Method not allowed');
    }

    const requestBody = await req.json();

    const resultValidation = generationRequestSchema.safeParse(requestBody);

    if (!resultValidation.success) {
      throw new APIError(400, `Invalid request body: ${resultValidation.error.message}`);
    }

    const prompt = generatePromptMsg(resultValidation.data);

    const payload: CreateCompletionParams = {
      model: 'gpt-3.5-turbo',
      temperature: 0.7,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
      max_tokens: 200,
      n: 1,
      stream: true, // stream the response
      user: 'real-estate-ai-api',
      messages: [
        {
          role: 'user',
          content: `You are a real estate agent. You are an expert writing descriptions for properties for sale. ${prompt}`,
        },
      ],
    };

    const stream = await createCompletionWithStream(payload);

    return new Response(stream);
  } catch (error: any) {
    console.log(error);

    if (error instanceof APIError) {
      return new Response(error.message, { status: error.status });
    }
    return new Response('Internal server error', { status: 500 });
  }
}

export const generatePromptMsg = (reqBody: GenerateRequestParams) => {
  return `Write a ${reqBody.mood} description for a ${
    reqBody.propertyType
  } based on the following context: ${reqBody.description}${
    reqBody.description.endsWith('.') ? '' : '.'
  } ${
    reqBody.targetAudience ? `The target audience is: ${reqBody.targetAudience}.` : ''
  }`;
};
