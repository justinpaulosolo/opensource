import { AppRouter } from '@server/trpc/router/_app';
import { inferProcedureOutput } from '@trpc/server';
import Image from 'next/future/image';

const RepoCard = ({
  repo,
  key,
}: {
  repo: inferProcedureOutput<AppRouter['project']['getAll']>;
  key: number;
}) => {
  console.log(repo, 'from repo card');
  return (
    <div
      key={key}
      className="flex items-center justify-between border-b border-gray-800 py-4"
    >
      <div>
        <h1 className="font-bold">{repo.fullName}</h1>
        <p className="text-sm">{repo.description}</p>
        <div className="mt-2 flex gap-2">
          {repo.topics?.map((topic, i) => (
            <span
              key={i}
              className="full rounded-full bg-primary-900  py-0.5 px-2 text-center text-xs text-primary-200"
            >
              {topic.name}
            </span>
          ))}
        </div>
      </div>
      <a
        href="/"
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2 rounded bg-gray-800 py-2 px-4"
      >
        <div>
          <Image
            src="/"
            width={25}
            height={25}
            className="rounded-full"
            alt="Profile pic"
          />
        </div>
        <span className="text-xs hover:underline">@test</span>
      </a>
    </div>
  );
};

export default RepoCard;
