import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Navbar() {
  const { status } = useSession();
  return (
    <nav className="sticky top-0 bg-white py-2 px-8 shadow">
      <div className="mx-auto flex w-full max-w-4xl">
        <div className="flex w-full items-center justify-between">
          <div className="items-center space-x-4">
            <Link href="/home">Home</Link>
            <Link href="/home">About</Link>
          </div>
          {status === "authenticated" ? (
            <button
              onClick={() => signOut()}
              className="rounded border border-blue-500 bg-blue-500 py-2 px-6 text-sm text-white hover:bg-white hover:text-blue-500"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => signIn()}
              className="rounded border border-blue-500 bg-blue-500 py-2 px-6 text-sm text-white hover:bg-white hover:text-blue-500"
            >
              Sign in
            </button>
          )}
        </div>
      </div>
    </nav>
  );
}
