import useSWR from 'swr';
import Container from '../components/home/Container';

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Testing() {
  const { data, error } = useSWR<any>('/api/github', fetcher);
  console.log(data);

  console.log(data);
  return (
    <Container>
      <div>
        <h1>Testing Page</h1>
      </div>
    </Container>
  );
}
