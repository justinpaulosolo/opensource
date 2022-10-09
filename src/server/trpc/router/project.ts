import { t } from "../trpc";
import { z } from "zod";

export const projectRouter = t.router({
  create: t.procedure
    .input(z.object({
      title: z.string(),
      description: z.string(),
      repoLink: z.string(),
      technologies: z.array(z.string())
    }))
    .mutation( async ({ctx, input}) => {
      console.log(input);
      const post = await ctx.prisma.project.create({
        data: {
          title: input.title,
          description: input.description,
          repolink: input.repoLink,
          technologys: {
            create: 
              input.technologies.map((item)=> {
                return {technology: { create: { name: item }}}
              })
          }
        }
      })
      return post
    }),
  delete: t.procedure
    .input(z.number())
    .mutation(async ({ctx, input}) => {
      return await ctx.prisma.project.delete({
        where: {
          id: input
        }
      })
      })
    })
