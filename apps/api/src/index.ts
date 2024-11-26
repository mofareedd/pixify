// import 'dotenv/config';
import { Hono } from 'hono';
import { createRouteHandler } from 'uploadthing/server';
import { uploadRouter } from './lib/uploadthing';
import { templateRoute } from './routes/template';

const handlers = createRouteHandler({
  router: uploadRouter,
  config: {},
});

const app = new Hono();
const apiRoutes = app
  .basePath('/api')
  .route('/template', templateRoute)
  .all('/api/uploadthing', (context) => handlers(context.req.raw));

export default {
  port: 1337,
  fetch: app.fetch,
};

export type AppType = typeof apiRoutes;
