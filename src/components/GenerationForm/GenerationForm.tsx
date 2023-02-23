import { useGenerationForm } from '@/hooks/useGenerationForm';
import { cls } from '@/utils/classes';
import { AUDIENCES, MOODS, PROPERTY_TYPES } from '@/utils/options';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { CircleBadge } from '../CircleBadge';
import { Dropdown } from '../Dropdown';
import { Icon } from '../Svgs';

type GenerationFormProps = {
  className?: string;
};

type FormData = {
  propertyType: string;
  description: string;
  audience: string;
  mood: string;
};

const INITIAL_FORM_DATA: FormData = {
  propertyType: PROPERTY_TYPES[0],
  description: '',
  audience: AUDIENCES[0],
  mood: MOODS[0],
};

export const GenerationForm = ({ className }: GenerationFormProps) => {
  const {
    //reset,
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormData>({
    defaultValues: INITIAL_FORM_DATA,
  });

  const { description, isLoading, generate } = useGenerationForm();

  const onSubmit = (data: FormData) => {
    generate({
      propertyType: data.propertyType as any,
      description: data.description,
      targetAudience: data.audience as any,
      mood: data.mood as any,
    });
  };

  useEffect(() => {
    if (!description) {
      return;
    }
    // scroll to the bottom of the page
    window.scrollTo(0, document.body.scrollHeight);
  }, [description]);

  return (
    <div className={cls('max-w-2xl w-full', className)}>
      <form className="flex flex-col space-y-8" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <CircleBadge value="1" />
            <label className="text-left font-medium" htmlFor="propertyType">
              Property Type
            </label>
          </div>
          <Controller
            name="propertyType"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={Array.from(PROPERTY_TYPES)}
                value={field.value}
                onChange={(item: string) => field.onChange(item)}
              />
            )}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <CircleBadge value="2" />
            <label className="text-left font-medium" htmlFor="description">
              Description
            </label>
          </div>
          <div>
            <textarea
              {...register('description', { required: true })}
              id="description"
              name="description"
              rows={4}
              className={cls(
                'w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black',
                errors.description?.type === 'required'
                  ? ' focus:border-red-500 focus:ring-red-500 border-red-300'
                  : undefined
              )}
              placeholder={
                'e.g. An apartment with beautiful views of the city, modern interior, and a spacious living room.'
              }
            />
            {errors.description?.type === 'required' && (
              <p className="text-red-500 text-sm text-left">This field is required</p>
            )}
          </div>
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <CircleBadge value="3" />
            <label className="text-left font-medium" htmlFor="audience">
              Target Audience
            </label>
          </div>
          <Controller
            name="audience"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={Array.from(AUDIENCES)}
                value={field.value}
                onChange={(item: string) => field.onChange(item)}
              />
            )}
          />
        </div>
        <div className="flex flex-col space-y-4">
          <div className="flex items-center space-x-2">
            <CircleBadge value="4" />
            <label className="text-left font-medium" htmlFor="mood">
              Mood
            </label>
          </div>
          <Controller
            name="mood"
            control={control}
            render={({ field }) => (
              <Dropdown
                options={Array.from(MOODS)}
                value={field.value}
                onChange={(item: string) => field.onChange(item)}
              />
            )}
          />
        </div>
        <button
          type="submit"
          disabled={isLoading}
          className={cls(
            'bg-black text-white font-medium py-2 px-4 rounded-lg hover:bg-gray-800',
            isLoading ? 'cursor-not-allowed bg-gray-500 hover:bg-gray-500' : undefined
          )}
        >
          {isLoading && <Icon name="spinner" />}
          Generate now ⚡︎
        </button>
      </form>
      {!isLoading && description && (
        <div className="mt-8">
          <h2 className="text-3xl font-bold">Generated Description 🎉</h2>
          <p className="mt-4 text-left">{description}</p>
        </div>
      )}
    </div>
  );
};
