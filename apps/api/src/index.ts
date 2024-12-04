import { newApp } from './lib/app';
import { init } from './middleware/init';
import { templateRoute } from './routes/template';

const app = newApp();

app.use('*', init());
const routes = app
  .basePath('/api')
  .get('/', (c) => {
    return c.text('hello');
  })
  .route('/template', templateRoute);
export type AppType = typeof routes;
export default app;
