import { TechIcon, TechListType } from "./TechIcons";

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
      className="w-full space-y-2 rounded-lg border bg-white p-5 drop-shadow-sm transition-all hover:scale-[1.02] hover:cursor-pointer"
    >
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <p>{props.description}</p>
      <div className="flex space-x-2">
        <TechIcon techs={techArr as Array<TechListType>} />
      </div>
    </div>
  );
}
