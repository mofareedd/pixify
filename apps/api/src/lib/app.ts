import { Hono } from 'hono';
import type { HonoEnv } from './env';

export function newApp() {
  const app = new Hono<HonoEnv>();
  app.use('*', (c, next) => {
    // @ts-ignore
    c.set(
      'location',
      c.req.header('True-Client-IP') ??
        c.req.header('CF-Connecting-IP') ??
        // @ts-expect-error - the cf object will be there on cloudflare
        c.req.raw?.cf.colo ??
        ''
    );
    c.set('userAgent', c.req.header('User-Agent'));

    return next();
  });

  return app;
}
