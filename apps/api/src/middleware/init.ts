import type { MiddlewareHandler } from 'hono';
import { createConnection } from '../lib/db';
import type { HonoEnv } from '../lib/env';

export function init(): MiddlewareHandler<HonoEnv> {
  return async (c, next) => {
    const primary = createConnection({
      url: c.env.DATABASE_URL,
    });

    c.set('services', { db: primary });

    await next();
  };
}
