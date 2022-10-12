import { t } from '../trpc';
import { Octokit } from '@octokit/rest';

export const githubRouter = t.router({
  getReposTest: t.procedure.query(async ({ ctx }) => {
    const userEmail = ctx.session?.user?.email;
    const userAuth = await ctx.prisma.user.findUnique({
      where: {
        email: userEmail as string,
      },
      include: {
        accounts: true,
      },
    });

    const octokit = new Octokit({
      auth: userAuth?.accounts[0]?.access_token,
    });

    const data = await octokit.request('GET /user/repos', {});
    return data;
  }),
});
