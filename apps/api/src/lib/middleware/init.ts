import type { MiddlewareHandler } from 'hono';
import { createConnection } from '../db';
import type { HonoEnv } from '../env';

export function init(): MiddlewareHandler<HonoEnv> {
  return async (c, next) => {
    const primary = createConnection({
      url: c.env.DATABASE_URL,
    });

    c.set('services', { db: primary });

    console.log('INIT()');
    await next();
  };
}
