import { signIn, signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import { Button } from '@components/common/Button';

export default function Navbar() {
  const { status } = useSession();
  return (
    <nav className="sticky top-0">
      <div className="mx-auto flex w-full max-w-4xl border-b border-gray-800 border-gray-900 bg-gray-900 bg-opacity-30 backdrop-blur-lg backdrop-filter">
        <div className="flex w-full items-center justify-between py-2">
          <div className="flex items-center gap-4">
            <Link href="/">
              <a className=" text-lg font-light tracking-wide text-gray-0">
                Open<span className="font-bold">Source</span>
              </a>
            </Link>

            <div className="items-center space-x-4">
              <Link href="/">
                <a className="text-base text-gray-300">Home</a>
              </Link>
              <Link href="/">
                <a className="text-base text-gray-300">About</a>
              </Link>
            </div>
          </div>

          <div>
            {status === 'authenticated' ? (
              <div className="flex space-x-4">
                <Link href="/dashboard">
                  <Button variant="secondary">Dashboard</Button>
                </Link>
                <Button
                  onClick={() => signOut()}
                  variant="secondary"
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
