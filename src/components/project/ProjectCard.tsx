import { motion } from 'framer-motion';
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

export default function ProjectCard({ props, i }: { props: Props; i: number }) {
  const techArr = props.technologies.map((item) => item.name);
  return (
    <motion.div
      variants={{
        hidden: (i) => {
          return {
            opacity: 0,
            y: -50 * i,
          };
        },
        visible: (i) => {
          return {
            opacity: 1,
            y: 0,
            transition: {
              delay: i * 0.025,
            },
          };
        },
      }}
      initial="hidden"
      animate="visible"
      custom={i}
      key={props.id}
      className="w-full space-y-2 rounded border border-gray-700 bg-gray-900 p-5 hover:cursor-pointer hover:border-gray-700 hover:bg-gray-800"
    >
      <a
        href={props.repolink}
        target="_blank"
        rel="noreferrer"
      >
        <h1 className="text-lg font-semibold text-gray-0">{props.title}</h1>
        <p className="text-gray-300">{props.description}</p>
        <div className="flex space-x-2">
          <TechIcon techs={techArr as Array<TechListType>} />
        </div>
      </a>
    </motion.div>
  );
}
