import { BASE_URL } from '@/utils/env-vars';
import axios from 'axios';
import { GenerateRequestParams } from '../server/types';

const axiosInstance = axios.create({
  baseURL: `${BASE_URL}/api/v1`,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const generateRealEstateDescription = async (payload: GenerateRequestParams) => {
  const res = await axiosInstance.post<{ description: string }>(
    '/edge/generate',
    payload
  );
  return res.data.description;
};
