import type { NextPage } from "next";
import Link from "next/link";
import Container from "../components/home/Container";
import ProjectCard from "../components/project/ProjectCard";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  const deleteProject = trpc.project.delete.useMutation();
  return (
    <Container>
      <div className="mx-auto mt-5 w-full max-w-4xl bg-gray-50">
        <div className="flex flex-col justify-start gap-5">
          <div>
            <Link href="/new-event">
              <button className="rounded-lg border border-black bg-black py-2 px-6 tracking-tight text-white hover:bg-white hover:text-black">
                New project
              </button>
            </Link>
            <button
              onClick={() => deleteProject.mutate("")}
              className="rounded-lg border border-black bg-black py-2 px-6 tracking-tight text-white hover:bg-white hover:text-black"
            >
              Delete test
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
            <ProjectCard />
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Home;
