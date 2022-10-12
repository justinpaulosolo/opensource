import { t } from '../trpc';
import { z } from 'zod';

export const projectRouter = t.router({
  create: t.procedure
    .input(
      z.object({
        title: z.string(),
        description: z.string(),
        repoLink: z.string(),
        createdBy: z.string(),
        technologies: z.array(z.string()),
      })
    )
    .mutation(async ({ ctx, input }) => {
      const post = await ctx.prisma.project.create({
        data: {
          title: input.title,
          description: input.description,
          repolink: input.repoLink,
          createdBy: input.createdBy,
          technologies: {
            connectOrCreate: input.technologies.map((tag) => ({
              where: { name: tag },
              create: { name: tag },
            })),
          },
        },
      });
      return post;
    }),
  delete: t.procedure.input(z.string()).mutation(async ({ ctx, input }) => {
    await ctx.prisma.project.delete({
      where: {
        id: input,
      },
    });
  }),
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.project.findMany({
      include: {
        technologies: true,
      },
    });
  }),
  getByUser: t.procedure.query(async ({ ctx }) => {
    const userId = await ctx?.session?.user?.id;
    const data = await ctx.prisma.project.findMany({
      where: {
        createdBy: userId,
      },
      include: {
        technologies: true,
      },
    });
    return data;
  }),
});
