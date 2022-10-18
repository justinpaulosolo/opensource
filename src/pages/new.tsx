import { FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { trpc } from '@utils/trpc';
import RepoCard from '@components/project/RepoCard';
import { Button } from '@components/common/button';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

export default function New() {
  const router = useRouter();
  const { data } = trpc.github.getReposTest.useQuery();
  const [selectedItem, setSelectedItem] = useState(null);
  const session = useSession();
  const projectMutation = trpc.project.create.useMutation();

  console.log('This is the data we are getting: ', data?.data);

  const handleSubmit = () => {
    console.log('This is the selected item:', selectedItem);
  };

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

      <pre className="">{JSON.stringify(selectedItem)}</pre>

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
        className="rounded-md border border-black bg-black py-4 text-sm tracking-wide text-white hover:bg-white hover:text-black"
        disabled={!!!selectedItem}
        onClick={() => {
          console.log(selectedItem);
          projectMutation.mutate(selectedItem!);
        }}
      >
        Submit
      </button>
    </div>
  );
}
