import { Html, Head, Main, NextScript } from 'next/document';

export default function Document(props: any) {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/fonts/ibm-plex-sans-var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body className="bg-black text-white dark:bg-black">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
