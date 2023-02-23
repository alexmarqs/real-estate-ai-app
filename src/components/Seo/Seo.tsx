import Head from 'next/head';
import { useRouter } from 'next/router';

export type SeoProps = {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
};

export const Seo = ({ title, description, image, url, type }: SeoProps) => {
  const router = useRouter();
  const { pathname } = router;

  const seo = {
    title: title || 'Real Estate AI Generator',
    description: description || 'Generate your house description in seconds.',
    image: image || 'https://realestate-aigenerator.vercel.app/og-image.png',
    url: url || `https://realestate-aigenerator.vercel.app${pathname}`,
    type: type || 'website',
  };

  return (
    <Head>
      <title>{seo.title}</title>
      <meta name="description" content={seo.description} />
      <meta property="og:description" content={seo.description} />
      <meta property="og:title" content={seo.title} />
      <meta property="og:url" content={seo.url} />
      <meta property="og:type" content={seo.type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={seo.title} />
      <meta name="twitter:description" content={seo.description} />
      <meta property="og:image" content={seo.image} />
      <meta name="twitter:image" content={seo.image} />
    </Head>
  );
};
