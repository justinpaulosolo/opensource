import { useRouter } from 'next/router';
import { TechIcon, TechListType } from '../project/TechIcons';

interface Props {
  id: string;
  title: string;
  description: string;
  repolink: string;
  technologies: Array<Technologies>;
}

type Technologies = {
  id: string;
  name: string;
};

export default function ProtectProjectCard({
  props,
  callback,
}: {
  props: Props;
  callback: (id: string) => void;
}) {
  const techArr = props.technologies.map((item) => item.name);
  const router = useRouter();

  const onDelete = () => {
    callback(props.id);
  };

  return (
    <div
      key={props.id}
      className="w-full space-y-2 rounded-lg border bg-white p-5 drop-shadow-sm transition-all"
    >
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <p>{props.description}</p>
      <div className="flex space-x-2">
        <TechIcon techs={techArr as Array<TechListType>} />
      </div>

      <div className="flex space-x-2">
        <button
          onClick={onDelete}
          className="rounded bg-red-500 py-1 px-5 text-sm text-white"
        >
          Delete
        </button>
        <button
          onClick={() => router.push(`dashboard/edit/${props.id}`)}
          className="rounded bg-yellow-500 py-1 px-5 text-sm text-white"
        >
          Edit
        </button>
      </div>
    </div>
  );
}
