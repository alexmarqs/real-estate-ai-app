import type { AppProps } from 'next/app';
import 'src/styles/globals.css';

import { NextPage } from 'next/types';

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  // use the getLayout defined in each page
  // if it doesn't exist, provide a fallback
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(<Component {...pageProps} />);
}
