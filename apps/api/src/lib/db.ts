import { neon } from '@neondatabase/serverless';
import { type Database, drizzle, schema } from '@pixify/db';
type ConnectionOptions = {
  url: string;
};

export function createConnection(opts: ConnectionOptions): Database {
  const sql = neon(opts.url);
  return drizzle({ client: sql, schema });
}
