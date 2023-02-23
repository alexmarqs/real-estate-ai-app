import { cls } from '@/utils/classes';

type CircleBadgeProps = {
  value: string;
  className?: string;
};

export const CircleBadge = ({ value, className }: CircleBadgeProps) => {
  return (
    <div
      className={cls(
        'relative w-3 h-3 bg-black rounded-full flex justify-center items-center text-center p-4 text-white',
        className
      )}
    >
      <span className="absolute left-0 top-0"></span>
      {value}
    </div>
  );
};
