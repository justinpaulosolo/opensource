import Spinner from '@components/common/Spinner';
import DashboardLayout from '@components/dashboard/DashboardLayout';
import RepoCard from '@components/home/RepoCard';
import { trpc } from '@utils/trpc';
export default function Dashboard() {
  const projects = trpc.project.getAllByUser.useQuery();
  return (
    <DashboardLayout>
      {projects.data ? (
        projects.data.map((repo, i) => (
          <RepoCard
            repo={repo}
            key={i}
          />
        ))
      ) : (
        <Spinner />
      )}
    </DashboardLayout>
  );
}
