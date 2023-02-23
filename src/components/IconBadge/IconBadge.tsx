import { cls } from '@/utils/classes';
import { AnchorHTMLAttributes } from 'react';
import { Icon, IconProps } from '../Svgs';

type IconBadgeProps = {
  icon: IconProps['name'];
  className?: string;
  text: string;
  href: AnchorHTMLAttributes<HTMLAnchorElement>['href'];
};

export const IconBadge = ({ icon, className, text, href }: IconBadgeProps) => {
  return (
    <a
      className={cls(
        'flex max-w-fit items-center justify-center space-x-2 rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-600 shadow-md transition-colors hover:bg-gray-100',
        className
      )}
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Icon name={icon} className="w-6 h-6" />
      <p>{text}</p>
    </a>
  );
};
