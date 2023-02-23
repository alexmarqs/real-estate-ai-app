import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* base: */}
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Generate your house description in seconds." />
        <meta
          property="og:description"
          content="Generate your house description in seconds."
        />
        <meta property="og:title" content="Real Estate AI Generator" />
        <meta property="og:site_name" content="realestate-aigenerator.vercel.app" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://realestate-aigenerator.vercel.app" />
        <meta
          property="og:image"
          content="https://realestate-aigenerator.vercel.app/og-image.png"
        />
        {/* twitter: */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Real Estate AI Generator" />
        <meta
          name="twitter:description"
          content="Generate your next Twitter bio in seconds."
        />
        <meta
          name="twitter:image"
          content="https://realestate-aigenerator.vercel.app/og-image.png"
        />
      </Head>
      <body className="antialiased text-gray-800">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
