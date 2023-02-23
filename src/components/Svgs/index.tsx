import { Github } from './Github';
import { Spinner } from './Spinner';

export type IconProps = {
  name: 'github' | 'spinner';
  className?: string;
};

export const Icon = ({ name, className }: IconProps) => {
  switch (name) {
    case 'github':
      return <Github className={className} />;
    case 'spinner':
      return <Spinner className={className} />;
    default:
      return null;
  }
};
