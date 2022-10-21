import { useRouter } from 'next/router';
import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { trpc } from '@utils/trpc';
import { Button } from '@components/common/button';
import { FaArrowLeft } from 'react-icons/fa';
import RepoCard from '@components/project/RepoCard';

export default function New() {
  const session = useSession();
  const router = useRouter();
  const { data } = trpc.github.getReposTest.useQuery();
  const [selectedItem, setSelectedItem] = useState(null);
  const projectMutation = trpc.project.create.useMutation();

  return (
    <div className="mx-auto mt-5 flex w-full max-w-4xl flex-col gap-5 bg-gray-900">
      <div>
        <Button
          variant="secondary"
          onClick={() => router.back()}
        >
          <FaArrowLeft className="text-gray-50" />
        </Button>
      </div>
      <h1 className="text-xl">Select one repo:</h1>

      <div className="grid grid-cols-2 gap-4">
        {data?.data?.map((item: any, i) => {
          const refactorData = {
            fullName: item.full_name,
            name: item.name,
            description: item.description,
            repolink: item.html_url,
            creator: session.data?.user?.email as string,
            topics: item.topics,
          };

          return (
            <RepoCard
              key={i}
              props={refactorData}
              setter={(props: any) => {
                setSelectedItem(props);
              }}
            />
          );
        })}
      </div>

      <button
        type="submit"
        className="mb-10 rounded-md border border-black bg-black py-4 text-sm tracking-wide text-white hover:bg-white hover:text-black"
        disabled={!!!selectedItem}
        onClick={() => {
          console.log(selectedItem);
          projectMutation
            .mutateAsync(selectedItem!)
            .then(() => router.push('/'));
        }}
      >
        Submit
      </button>
    </div>
  );
}
