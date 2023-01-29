export const OPENAI_API_KEY = process.env.OPENAI_API_KEY;
export const BASE_URL = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';

if (!OPENAI_API_KEY) {
  throw new Error('Missing environment variable OPENAI_API_KEY');
}
