import { BASE_URL } from '@/utils/env-vars';
import { GenerateRequestParams } from '../server/types';

const REAL_ESTATE_API_BASE_URL = `${BASE_URL}/api/v1`;

export const generateRealEstateDescriptionStream = async (
  payload: GenerateRequestParams
) => {
  const res = await fetch(`${REAL_ESTATE_API_BASE_URL}/edge/generate`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(res.statusText);
  }

  const data = res.body;

  if (!data) {
    return;
  }

  return data;
};
