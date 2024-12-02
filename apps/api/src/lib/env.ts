import type { Database } from '@pixify/db';
import { z } from 'zod';

export const zEnv = z.object({
  DATABASE_URL: z.string(),
});

export type Env = z.infer<typeof zEnv>;

export type ServiceContext = {
  db: Database;
  // logger: Logger;
};

export type HonoEnv = {
  Bindings: Env;
  Variables: {
    services: ServiceContext;
    /**
     * IP address or region information
     */
    location: string;
    userAgent?: string;
  };
};
