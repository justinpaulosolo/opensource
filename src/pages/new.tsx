import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { trpc } from '@utils/trpc';
import RepoCard from '@components/project/RepoCard';

export default function New() {
  const router = useRouter();
  const { data } = trpc.github.getReposTest.useQuery();

  console.log('This is the data we are getting: ', data?.data);

  return (
    <div className="mx-auto mt-5 flex w-full max-w-4xl flex-col gap-5 bg-gray-50">
      <button
        onClick={() => router.back()}
        className="flex h-[50px] w-[50px] items-center justify-center rounded-lg border bg-gray-50 hover:bg-gray-200"
      >
        <FaArrowLeft className="text-gray-700" />
      </button>

      <div className="grid grid-cols-2 gap-4">
        {data?.data?.map((item: any) => {
          const refactorData = {
            id: item.id,
            title: item.name,
            description: item.description,
            repolink: item.html_url,
          };

          return (
            <RepoCard
              key={item.id}
              props={refactorData}
            />
          );
        })}
      </div>

      <button
        type="submit"
        className="rounded-md border border-black bg-black py-4 text-sm tracking-wide text-white hover:bg-white hover:text-black"
      >
        Submit
      </button>
    </div>
  );
}
