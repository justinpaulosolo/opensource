import DashboardLayout from '@components/dashboard/DashboardLayout';
import ProtectProjectCard from '@components/dashboard/ProtectedProjectCard';
import { Spinner } from '@components/common/Spinner';
import { trpc } from '@utils/trpc';

export default function Dashboard() {
  const {
    data: projects,
    isLoading,
    refetch,
  } = trpc.project.getByUser.useQuery();
  const { mutateAsync } = trpc.project.delete.useMutation();

  const handleDelete = (id: string) => {
    mutateAsync(id).then(() => refetch());
  };

  if (isLoading) return <Spinner />;

  return (
    <DashboardLayout>
      {projects?.map((item) => {
        return (
          <ProtectProjectCard
            key={item.id}
            props={item}
            callback={handleDelete}
          />
        );
      })}
    </DashboardLayout>
  );
}
