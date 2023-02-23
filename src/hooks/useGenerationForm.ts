import { generateRealEstateDescription } from '@/lib/client/real-estate-api-client';
import { GenerateRequestParams } from '@/lib/server/types';
import { showToast } from '@/utils/toasts';
import { useCallback, useState } from 'react';

export type UseGenerationFormProps = {
  options?: {
    disableToastOnError?: boolean;
  };
};

export const useGenerationForm = (props: UseGenerationFormProps = {}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const [description, setDescription] = useState<string | null>(null);

  const generate = useCallback(
    async (data: GenerateRequestParams) => {
      setIsLoading(true);
      setError(null);
      setDescription(null);

      try {
        const description = await generateRealEstateDescription(data);

        setDescription(description);
      } catch (error: any) {
        !props.options?.disableToastOnError &&
          showToast('Error when generating the description', 'error');

        setError(error);
      } finally {
        setIsLoading(false);
      }
    },
    [props.options?.disableToastOnError]
  );

  return {
    generate,
    isLoading,
    error,
    description,
  };
};
