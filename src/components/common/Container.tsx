import Head from 'next/head';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export default function Container(props: React.PropsWithChildren) {
  const { children } = props;
  return (
    <div className="bg-gray-900">
      <Head>
        <title>OpenSource</title>
        <meta
          name="description"
          content="Open source projects for everyone"
        />
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>
      <Navbar />
      <main className="flex flex-col justify-center py-2">{children}</main>
      <Footer />
    </div>
  );
}
