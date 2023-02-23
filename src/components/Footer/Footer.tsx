import { Icon } from '../Svgs';

export const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 h-18 sm:h-12">
      <div className="flex sm:flex-row flex-col justify-between mx-auto max-w-7xl h-18 sm:h-12 items-center sm:py-0 py-2 sm:px-2">
        <div className="text-sm text-center">
          Powered by{' '}
          <a
            href="https://openai.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline transition underline-offset-2"
          >
            OpenAI{' '}
          </a>
          and{' '}
          <a
            href="https://vercel.com/"
            target="_blank"
            rel="noreferrer"
            className="font-bold hover:underline transition underline-offset-2"
          >
            Vercel Edge Functions.
          </a>
        </div>
        {/**<p className="text-sm font-medium">Made with ❤️</p>*/}
        <div className="flex space-x-2">
          <a
            href="https://github.com/alexmarqs/real-estate-ai-app"
            target="_blank"
            rel="noreferrer"
          >
            <Icon name="github" className="h-6 w-6 fill-slate-500 hover:fill-slate-700" />
          </a>
        </div>
      </div>
    </footer>
  );
};
