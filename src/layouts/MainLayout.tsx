import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Seo, SeoProps } from '@/components/Seo/Seo';
import { Inter } from '@next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

type MainLayoutProps = {
  children: React.ReactNode;
  meta?: Partial<SeoProps>;
};

export const MainLayout = ({ children, meta }: MainLayoutProps) => {
  return (
    <div
      className={`${inter.variable} font-sans flex flex-col min-h-screen items-center justify-center`}
    >
      <Seo {...(meta || {})} />
      <Header />
      <main className="flex-1 flex flex-col justify-center items-center mx-auto max-w-7xl text-center px-4 w-full py-4">
        {children}
      </main>
      <Footer />
    </div>
  );
};
