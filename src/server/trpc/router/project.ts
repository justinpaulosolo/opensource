import { t, authedProcedure } from '../trpc';
import { z } from 'zod';

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
  create: authedProcedure
    .input(
      z.object({
        id: z.string(),
        name: z.string(),
        fullName: z.string(),
        description: z.string(),
        repolink: z.string(),
        owner: z.object({
          id: z.number(),
          avatarUrl: z.string(),
          login: z.string(),
          reposUrl: z.string(),
          url: z.string(),
        }),
        ownerId: z.number(),
        creator: z.string(),
        topics: z.array(z.string()),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const project = await ctx.prisma.project.create({
        data: {
          id: input.id,
          name: input.name,
          fullName: input.fullName,
          description: input.description,
          repolink: input.repolink,
          owner: {
            create: {
              id: input.owner.id,
              avatarUrl: input.owner.avatarUrl,
              login: input.owner.login,
              reposUrl: input.owner.reposUrl,
              url: input.owner.url,
            },
          },
          ownerId: input.ownerId,
          creator: {
            connect: {
              email: input.creator,
            },
          },
          topics: {
            create,
          },
        },
      });
    }),
});
