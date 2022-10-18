import { t, authedProcedure } from '../trpc';
import { z } from 'zod';

export const projectRouter = t.router({
  getAll: t.procedure.query(async ({ ctx }) => {
    const data = await ctx.prisma.project.findMany({
      include: {
        topics: true,
        creator: true,
      },
    });
    console.log(data, "<-------")
    return data;
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
        creator: true,
      },
    });
  }),
  create: authedProcedure
    .input(
      z.object({
        name: z.string(),
        fullName: z.string(),
        description: z.nullable(z.string()),
        repolink: z.string(),
        creator: z.string(),
        topics: z.nullable(z.array(z.string())),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const user = await ctx.session.user.id;
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
            create: input.topics?.map((topic) => ({ name: topic })),
          },
        },
      });
      return project;
  }),
  delete: authedProcedure
  .input(z.string(),)
  .mutation(async ({input, ctx}) => {
    return ctx.prisma.project.delete({
      where: {
        id: input
      }
    })
  }),
})
