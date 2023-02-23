import Image from 'next/image';
import vercelLogo from '../../../public/vercelLogo.png';

export const Header = () => {
  return (
    <header className="w-full border-b border-gray-200 h-14">
      <div className="flex justify-between mx-auto max-w-7xl h-14 items-center px-4 md:px-2">
        <h1 className=" text-xl sm:text-2xl font-bold tracking-tight text-center">
          Real Estate AI Generator
        </h1>

        <a
          href={'https://vercel.com/templates/next.js/twitter-bio'}
          target="_blank"
          rel="noreferrer"
        >
          <Image src={vercelLogo} alt="Logo" className="w-8 h-[28px]" />
        </a>
      </div>
    </header>
  );
};
