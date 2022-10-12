// src/pages/_app.tsx
import { SessionProvider } from 'next-auth/react';
import type { Session } from 'next-auth';
import type { AppType } from 'next/app';
import '@styles/globals.css';
import { trpc } from '@utils/trpc';
import Container from '@components/home/Container';

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <Container>
        <Component {...pageProps} />
      </Container>
    </SessionProvider>
  );
};

export default trpc.withTRPC(MyApp);
