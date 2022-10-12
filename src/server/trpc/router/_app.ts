// src/server/trpc/router/index.ts
import { t } from '../trpc';
import { projectRouter } from './project';
import { githubRouter } from './github';

export const appRouter = t.router({
  project: projectRouter,
  github: githubRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
