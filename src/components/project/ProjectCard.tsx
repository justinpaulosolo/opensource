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
      whileHover={{ scale: 1.01 }}
      initial="hidden"
      animate="visible"
      custom={i}
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
    </motion.div>
  );
}
