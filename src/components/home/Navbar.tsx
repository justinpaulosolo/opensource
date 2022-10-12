import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@components/common/Button';

export default function Navbar() {
  const { status } = useSession();
  return (
    <nav className="sticky top-0 border-b bg-white py-3 px-8">
      <div className="mx-auto flex w-full max-w-4xl">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className="text-xl font-bold">OpenSource</a>
            </Link>

            <div className="items-center space-x-4">
              <Link href="/">Home</Link>
              <Link href="/about">About</Link>
            </div>
          </div>

          <div>
            {status === 'authenticated' ? (
              <div className="flex space-x-4">
                <Link href="/dashboard">
                  <Button>Dashboard</Button>
                </Link>
                <Button
                  onClick={() => signOut()}
                  variant="primary-inverted"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => signIn()}
                variant="secondary"
              >
                Sign in
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}
