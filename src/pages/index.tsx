import type { NextPage } from 'next';
import React from 'react';
import { trpc } from '@utils/trpc';
import HomeLayout from '@components/home/HomeLayout';
import RepoCard from '@components/home/RepoCard';
import Spinner from '@components/common/Spinner';
import { Button } from '@components/common/button';

const Home: NextPage = () => {
  const projects = trpc.project.getAll.useQuery();
  return (
    <HomeLayout>
      <div className="mx-auto w-full max-w-4xl bg-gray-900">
        <div className="flex flex-col justify-start gap-5">
          <div>
            <form className="flex w-full gap-2">
              <input
                type="text"
                placeholder="Search"
                className="w-full rounded border border-gray-800 bg-gray-900 py-2 px-4 focus:outline-none"
              />
              <Button>Search</Button>
            </form>
          </div>
          <div className="flex flex-col">
            {projects.data ? (
              projects.data.map((item, i) => (
                <RepoCard
                  repo={item}
                  key={i}
                />
              ))
            ) : (
              <Spinner />
            )}
          </div>
        </div>
      </div>
    </HomeLayout>
  );
};

export default Home;
