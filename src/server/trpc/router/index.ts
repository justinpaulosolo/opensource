// src/server/trpc/router/index.ts
import { t } from "../trpc";
import { exampleRouter } from "./example";
import { authRouter } from "./auth";
import { projectRouter } from "./project";

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  project: projectRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
