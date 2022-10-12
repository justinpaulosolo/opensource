import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';
import { Spinner } from '../components/common/spinner';
import ProjectCard from '../components/project/ProjectCard';
import { trpc } from '../utils/trpc';

const Home: NextPage = () => {
  const { status } = useSession();
  const { isLoading, data } = trpc.project.getAll.useQuery();

  return (
    <React.Fragment>
      <div className="mx-auto mt-5 w-full max-w-4xl bg-gray-50">
        <div className="flex flex-col justify-start gap-5">
          {isLoading ? (
            <div className="mx-auto">
              <Spinner />
            </div>
          ) : (
            <React.Fragment>
              {status === 'authenticated' ? (
                <div>
                  <Link href="/new-event">
                    <button className="rounded-lg border border-black bg-black py-2 px-6 tracking-tight text-white hover:bg-white hover:text-black">
                      New project
                    </button>
                  </Link>
                </div>
              ) : (
                ''
              )}
              <div className="grid grid-cols-2 gap-4">
                {data?.map((item) => {
                  return (
                    <ProjectCard
                      key={item.id}
                      props={item}
                    />
                  );
                })}
              </div>
            </React.Fragment>
          )}
        </div>
      </div>
    </React.Fragment>
  );
};

export default Home;
