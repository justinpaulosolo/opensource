import { t } from '../trpc';

export const projectRouter = t.router({
  getAll: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.project.findMany({
      include: {
        owner: true,
        topics: true,
      },
    });
  }),
});
