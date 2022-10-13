import {
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiReact,
  SiCsharp,
  SiPrisma,
  SiDotnet,
  SiVim,
  SiLua,
  SiGo,
  SiCplusplus,
  SiJava,
} from 'react-icons/si';

//Todo: Read into this more
export type TechListType = keyof typeof techList;

export type TechIconsProps = {
  techs: Array<TechListType>;
} & React.ComponentPropsWithoutRef<'ul'>;

export function TechIcon({ techs }: TechIconsProps) {
  return (
    <ul className="mb-4 flex space-x-2">
      {techs.map((tech, index) => {
        if (!techList[tech]) return;
        const current = techList[tech];

        return (
          <li
            key={index}
            className="flex"
          >
            <current.icon className="h-5 w-5 text-gray-500" />
          </li>
        );
      })}
    </ul>
  );
}

const techList = {
  'Next.js': {
    icon: SiNextdotjs,
  },
  Tailwind: {
    icon: SiTailwindcss,
  },
  Typescript: {
    icon: SiTypescript,
  },
  React: {
    icon: SiReact,
  },
  'C#': {
    icon: SiCsharp,
  },
  Prisma: {
    icon: SiPrisma,
  },
  'Asp.net': {
    icon: SiDotnet,
  },
  Vim: {
    icon: SiVim,
  },
  Lua: {
    icon: SiLua,
  },
  Go: {
    icon: SiGo,
  },
  'C++': {
    icon: SiCplusplus,
  },
  Java: {
    icon: SiJava,
  },
  Python: {
    icon: SiJava,
  },
};
