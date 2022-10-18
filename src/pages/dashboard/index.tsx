import Spinner from '@components/common/Spinner';
import DashboardLayout from '@components/dashboard/DashboardLayout';
import { trpc } from '@utils/trpc';
import { Button } from '@components/common/button';
export default function Dashboard() {
  const projects = trpc.project.getAllByUser.useQuery();
  const deleteProject = trpc.project.delete.useMutation();
  return (
    <DashboardLayout>
      <h1 className="text-xl font-bold">Listed repositories:</h1>
      {projects.data ? (
        projects.data.map((item, i) => {
          return (
            <div
              key={i}
              className="flex items-center justify-between border-b border-gray-800 py-4"
            >
              <div>
                <h1 className="font-bold">{item.fullName}</h1>
                <p className="text-sm">{item.description}</p>
                <div className="mt-2 flex gap-2">
                  {item.topics?.map((topic, i) => (
                    <span
                      key={i}
                      className="full rounded-full bg-primary-900  py-0.5 px-2 text-center text-xs text-primary-200"
                    >
                      {topic.name}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <Button
                  onClick={() => {
                    deleteProject.mutateAsync(item.id).then(projects.refetch);
                  }}
                  variant="secondary"
                >
                  Remove
                </Button>
              </div>
            </div>
          );
        })
      ) : (
        <Spinner />
      )}
    </DashboardLayout>
  );
}
