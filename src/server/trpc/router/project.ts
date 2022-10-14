import { t, authedProcedure } from '../trpc';

export const projectRouter = t.router({
  getAll: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.project.findMany({
      include: {
        owner: true,
        topics: true,
      },
    });
  }),
  getAllByUser: authedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.project.findMany({
      where: {
        creator: {
          id: ctx.session.user.id,
        },
      },
      include: {
        owner: true,
        topics: true,
      },
    });
  }),
});
