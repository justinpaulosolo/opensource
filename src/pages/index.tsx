import type { NextPage } from 'next';
import React from 'react';
import HomeLayout from '@components/home/HomeLayout';
import Image from 'next/future/image';
import { Spinner } from '@components/common/Spinner';
import { trpc } from '@utils/trpc';
import { Button } from '@components/common/Button';

const Home: NextPage = () => {
  const { data: projects } = trpc.project.getAll.useQuery();
  console.log(projects);
  return (
    <HomeLayout>
      <div className="mx-auto w-full max-w-4xl bg-gray-900">
        <div className="flex flex-col justify-start gap-5">
          <div className="">
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
            {projects ? (
              projects.map((item, i) => {
                return (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b border-gray-800 py-4"
                  >
                    <div>
                      <h1 className="font-bold">{item.fullName}</h1>
                      <p className="text-sm">{item.description}</p>
                      <div className="mt-2 flex gap-2">
                        {item.topics?.map((topic, i) => (
                          <span
                            key={i}
                            className="full rounded-full bg-primary-900  py-0.5 px-2 text-center text-xs text-primary-200"
                          >
                            {topic.name}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="flex items-center gap-2 rounded bg-gray-800 py-2 px-4">
                      <div>
                        <Image
                          src={item.owner.avatarUrl}
                          width={25}
                          height={25}
                          className="rounded-full"
                          alt="Profile pic"
                        />
                      </div>
                      <p className="text-xs">@{item.owner.login}</p>
                    </div>
                  </div>
                );
              })
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
