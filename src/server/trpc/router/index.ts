// src/server/trpc/router/index.ts
import { t } from '../trpc';
import { exampleRouter } from './example';
import { authRouter } from './auth';
import { projectRouter } from './projectRouter';
import { githubRouter } from './githubRouter';

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  project: projectRouter,
  github: githubRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
