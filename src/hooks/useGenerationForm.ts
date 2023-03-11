import { generateRealEstateDescriptionStream } from '@/lib/client/real-estate-api-client';
import { GenerateRequestParams } from '@/lib/server/types';
import { showToast } from '@/utils/toasts';
import { useCallback, useState } from 'react';

export type UseGenerationFormProps = {
  options?: {
    disableToastOnError?: boolean;
    onSuccess?: () => void;
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
        const streamData = await generateRealEstateDescriptionStream(data);

        if (streamData) {
          const reader = streamData.getReader();
          const decoder = new TextDecoder();
          let done = false;

          while (!done) {
            const { value, done: doneReading } = await reader.read();
            done = doneReading;
            const chunkValue = decoder.decode(value);
            setDescription((prev) => (prev ? prev : '') + chunkValue);
          }

          if (props.options?.onSuccess) {
            props.options.onSuccess();
          }
        }
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
