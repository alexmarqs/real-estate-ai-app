import { cls } from '@/utils/classes';
import {
  ClipboardDocumentCheckIcon,
  ClipboardDocumentIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';

type CardProps = {
  description: string;
  className?: string;
};

const TIMEOUT = 3000;

export const Card = ({ description, className }: CardProps) => {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(description);
    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, TIMEOUT);
  };

  return (
    <div
      className={cls(
        'mt-4 text-left rounded-xl shadow-md px-4 py-5 border hover:bg-gray-100 transition-colors relative group cursor-pointer',
        className && className
      )}
      onClick={copyToClipboard}
    >
      <p>{description}</p>

      <button
        className={cls(
          'text-[11px] font-medium bg-white absolute top-1 right-1 border px-1 rounded group-hover:inline-flex items-center  group-hover:visible',
          copied ? 'visible inline-flex text-green-600' : 'hidden'
        )}
      >
        {copied ? (
          <>
            <ClipboardDocumentCheckIcon className="w-3 h-3 mr-1" />
            <span>Copied!</span>
          </>
        ) : (
          <>
            <ClipboardDocumentIcon className="w-3 h-3 mr-1" />
            <span>Copy</span>
          </>
        )}
      </button>
    </div>
  );
};
