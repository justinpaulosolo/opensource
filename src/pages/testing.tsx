import Container from '../components/home/Container';
import { trpc } from '../utils/trpc';

export default function Testing() {
  //const { data } = trpc.github.getUser.useQuery('justinpaulosolo');
  //const { data } = trpc.github.getRepos.useQuery('justinpaulosolo');
  const { data } = trpc.github.getReposTest.useQuery();

  console.log(data);

  return (
    <Container>
      <div>
        <h1>Testing Page</h1>
      </div>
    </Container>
  );
}
