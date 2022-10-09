import { SiLua, SiVim } from "react-icons/si";

interface Props {
  id: string;
  title: string;
  description: string;
  repolink: string;
}

export default function ProjectCard({ props }: { props: Props }) {
  console.log(props);
  return (
    <div
      key={props.id}
      className="w-full space-y-2 rounded-lg border bg-white p-5 drop-shadow-sm transition-all hover:scale-[1.02] hover:cursor-pointer"
    >
      <h1 className="text-lg font-semibold">{props.title}</h1>
      <p>{props.description}</p>
      <div className="g flex space-x-2">
        <SiVim />
        <SiLua />
      </div>
    </div>
  );
}
