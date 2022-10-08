import type { NextPage } from "next";
import Container from "../components/Container";

const Home: NextPage = () => {
  return (
    <Container>
      <div className="mx-auto w-full max-w-4xl">
        <div className="w-full border">
          <h1>Home</h1>
        </div>
      </div>
    </Container>
  );
};

export default Home;
