import { Button } from '@components/common/Button';
import { trpc } from '@utils/trpc';

export default function Testing() {
  const { data } = trpc.github.getReposTest.useQuery();

  console.log(data);
  const loading = false;

  return (
    <div className="flex flex-col gap-5">
      <h1>Primary</h1>
      <div className="flex gap-5">
        <Button
          variant="primary"
          size="lg"
          loading={loading}
        >
          Dashboard
        </Button>
        <Button
          variant="primary-inverted"
          loading={loading}
          size="lg"
        >
          Dashboard
        </Button>
      </div>
      <h1>Secondary</h1>
      <div className="flex gap-5">
        <Button
          variant="secondary"
          size="lg"
          loading={loading}
        >
          Dashboard
        </Button>
        <Button
          variant="secondary-inverted"
          loading={loading}
          size="lg"
        >
          Dashboard
        </Button>
      </div>
      <h1>Danger</h1>
      <div className="flex gap-5">
        <Button
          variant="danger"
          size="lg"
          loading={loading}
        >
          Dashboard
        </Button>
        <Button
          variant="danger-inverted"
          loading={loading}
          size="lg"
        >
          Dashboard
        </Button>
      </div>
    </div>
  );
}
