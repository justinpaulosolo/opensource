import { t, authedProcedure } from '../trpc';
import { z } from 'zod';

export const projectRouter = t.router({
  getAll: t.procedure.query(async ({ ctx }) => {
    return await ctx.prisma.project.findMany({
      include: {
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
        topics: true,
      },
    });
  }),
  create: authedProcedure
    .input(
      z.object({
        name: z.string(),
        fullName: z.string(),
        description: z.string(),
        repolink: z.string(),
        creator: z.string(),
        topics: z.array(z.string()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.session.user.id;
      console.log(user);
      console.log(input);
      const project = await ctx.prisma.project.create({
        data: {
          name: input.name,
          fullName: input.fullName,
          description: input.description,
          repolink: input.repolink,
          creator: {
            connect: {
              id: user,
            },
          },
          topics: {
            create: input.topics.map((topic) => ({ name: topic })),
          },
        },
      });
      console.log(project);
      return project;
    }),
});
