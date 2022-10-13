import { useRouter } from 'next/router';
import { Button } from '@components/common/Button';
import { TechIcon, TechListType } from '@components/project/TechIcons';

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
      className="w-full space-y-2 rounded border border-gray-800 bg-gray-900 p-5"
    >
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <p>{props.description}</p>
      <div className="flex space-x-2">
        <TechIcon techs={techArr as Array<TechListType>} />
      </div>

      <div className="flex space-x-2">
        <Button
          variant="secondary"
          onClick={onDelete}
        >
          Delete
        </Button>
        <Button
          onClick={() => router.push(`dashboard/edit/${props.id}`)}
          variant="secondary"
        >
          Edit
        </Button>
      </div>
    </div>
  );
}
