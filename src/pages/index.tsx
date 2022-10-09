import type { NextPage } from "next";
import Container from "../components/home/Container";
import ProjectCard from "../components/project/ProjectCard";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="mx-auto mt-5 w-full max-w-4xl bg-gray-50">
        <div className="grid grid-cols-2 gap-4">
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </div>
      </div>
    </Container>
  );
};

export default Home;
