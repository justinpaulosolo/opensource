import { useForm, SubmitHandler } from 'react-hook-form';
import { FaArrowLeft, FaCheck } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { useSession } from 'next-auth/react';
import { trpc } from '@utils/trpc';
import { Button } from '@components/common/Button';

type FormValues = {
  title: string;
  description: string;
  repoLink: string;
  technologies: Array<string>;
  createdBy: string;
};

const tech = [
  { id: 1, name: 'React', unavailable: false },
  { id: 2, name: 'Javascript', unavailable: false },
  { id: 3, name: 'C#', unavailable: false },
  { id: 4, name: 'Next.js', unavailable: false },
  { id: 5, name: 'Prisma', unavailable: false },
  { id: 6, name: 'Typescript', unavailable: false },
  { id: 7, name: 'Asp.net', unavailable: false },
  { id: 8, name: 'Vim', unavailable: false },
  { id: 9, name: 'Lua', unavailable: false },
  { id: 10, name: 'Go', unavailable: false },
  { id: 11, name: 'C++', unavailable: false },
  { id: 12, name: 'Java', unavailable: false },
  { id: 13, name: 'Python', unavailable: false },
  { id: 14, name: 'Tailwind', unavailable: false },
];

export default function NewEvent() {
  const { register, handleSubmit } = useForm<FormValues>();
  const [technologies, setTechnologies] = useState([]);
  const router = useRouter();
  const { mutateAsync, isLoading } = trpc.project.create.useMutation();
  const { data: Session } = useSession();

  const onSubmit: SubmitHandler<FormValues> = (formData) => {
    formData.technologies = technologies.map(
      (item: { id: number; name: string; unavailable: boolean }) => item.name
    );
    formData.createdBy = Session?.user?.id as string;
    mutateAsync(formData).then(() => router.push('/'));
  };

  return (
    <>
      <div className="mx-auto mt-5 flex w-full max-w-4xl flex-col gap-5 bg-gray-50">
        <button
          onClick={() => router.back()}
          className="flex h-[50px] w-[50px] items-center justify-center rounded-lg border bg-gray-50 hover:bg-gray-200"
        >
          <FaArrowLeft className="text-gray-700" />
        </button>
        <div className="flex-col">
          <form
            className="roun flex flex-col gap-5 rounded-lg border bg-white p-5 drop-shadow-sm"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h1 className="text-4xl font-semibold tracking-tighter text-gray-700">
              Opensource Project
            </h1>
            <input
              placeholder="Title"
              className="w-full rounded-lg border p-5 text-sm"
              {...register('title')}
            />
            <input
              placeholder="Description"
              className="w-full rounded-lg border p-5 text-sm"
              {...register('description')}
            />
            <input
              placeholder="Github repo"
              className="w-full rounded-lg border p-5 text-sm"
              {...register('repoLink')}
            />
            <Listbox
              value={technologies}
              onChange={setTechnologies}
              multiple
            >
              <Listbox.Button className="flex w-full space-x-2 rounded-lg border p-5 text-sm">
                {technologies.length === 0 ? (
                  <p className="text-sm text-gray-400">Select technologies</p>
                ) : (
                  technologies.map(
                    (tech: { name: string; unavailable: boolean }, index) => {
                      return (
                        <div
                          key={index}
                          className="rounded border bg-gray-200 px-4"
                        >
                          <p>{tech.name}</p>
                        </div>
                      );
                    }
                  )
                )}
              </Listbox.Button>
              <Transition
                enter="transition duration-100 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-75 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <Listbox.Options className="rounded-lg border p-2">
                  {tech.map((person) => (
                    <Listbox.Option
                      key={person.id}
                      value={person}
                      disabled={person.unavailable}
                      className="rounded p-1 ui-active:bg-blue-500 ui-active:text-white ui-not-active:bg-white ui-not-active:text-black"
                    >
                      <div className="flex items-center gap-2">
                        <FaCheck className="hidden ui-selected:block" />
                        {person.name}
                      </div>
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </Listbox>
            <div>
              <Button
                loading={isLoading}
                type="submit"
              >
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
