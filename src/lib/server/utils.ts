import { GenerateRequestParams } from './types';

export const createJsonEdgeResponse = async (
  payload: Record<string, unknown> | string | null | undefined,
  status = 200
) => {
  if (typeof payload === 'string') {
    payload = { message: payload };
  }

  const response = new Response(payload && JSON.stringify(payload), {
    status,
    headers: {
      'content-type': 'application/json; charset=utf-8',
    },
  });

  return response;
};

export const generatePromptMsg = (reqBody: GenerateRequestParams) => {
  return `Act as a real estate agent and write a ${reqBody.mood} description for a ${
    reqBody.propertyType
  } for sale 
    based on the following context: ${reqBody.description}${
    reqBody.description.endsWith('.') ? '' : '.'
  } ${
    reqBody.targetAudience ? `The target audience is: ${reqBody.targetAudience}.` : ''
  }`;
};
