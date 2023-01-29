import { generateRealEstateDescription } from '@/lib/client/real-estate-api-client';
import { GenerateRequestParams } from '@/lib/server/types';
import { showToast } from '@/utils/toasts';
import { useCallback, useState } from 'react';

export type UseGenerateDescription = {
  options?: {
    onError?: (error: Error) => void;
    disableToast?: boolean;
  };
};

export const useGenerateDescription = ({ options }: UseGenerateDescription) => {
  const [isLoading, setIsLoading] = useState(false);

  const generateDescription = useCallback(
    async (data: GenerateRequestParams) => {
      setIsLoading(true);

      try {
        const description = await generateRealEstateDescription(data);

        return description;
      } catch (error: any) {
        !options?.disableToast &&
          showToast('Error when generating the description', 'error');

        if (options?.onError) {
          options.onError(error);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [options]
  );

  return {
    generateDescription,
    isGenerating: isLoading,
  };
};
