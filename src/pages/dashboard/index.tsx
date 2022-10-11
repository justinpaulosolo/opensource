import Container from '../../components/home/Container';
import DashboardLayout from '../../components/dashboard/DashboardLayout';
import ProtectProjectCard from '../../components/dashboard/ProtectedProjectCard';
import { trpc } from '../../utils/trpc';
export default function Dashboard() {
  const { data, isLoading, refetch } = trpc.project.getByUser.useQuery();
  const { mutateAsync } = trpc.project.delete.useMutation();

  if (isLoading) {
    return <p>Loading ....</p>;
  }
  console.log(data);

  const handleDelete = (id: string) => {
    mutateAsync(id).then(() => refetch());
  };

  return (
    <Container>
      <DashboardLayout>
        {' '}
        {data?.map((item) => {
          return (
            <ProtectProjectCard
              key={item.id}
              props={item}
              callback={handleDelete}
            />
          );
        })}
      </DashboardLayout>
    </Container>
  );
}
