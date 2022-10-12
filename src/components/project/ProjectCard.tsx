import { TechIcon, TechListType } from './TechIcons';

// TODO: Move type to a separate file
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

export default function ProjectCard({ props }: { props: Props }) {
  const techArr = props.technologies.map((item) => item.name);
  return (
    <div
      key={props.id}
      className="w-full space-y-2 rounded-lg border bg-white p-5 hover:cursor-pointer hover:border-gray-300"
    >
      <a
        href={props.repolink}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-lg font-semibold">{props.title}</h1>
        <p>{props.description}</p>
        <div className="flex space-x-2">
          <TechIcon techs={techArr as Array<TechListType>} />
        </div>
      </a>
    </div>
  );
}
