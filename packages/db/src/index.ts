import * as schema from './schema';
export { schema };
export * from 'drizzle-orm';

import type { NeonHttpDatabase } from 'drizzle-orm/neon-http';
export { drizzle } from 'drizzle-orm/neon-http';
export { drizzle as pgDrizzle } from 'drizzle-orm/postgres-js';

export type Database = NeonHttpDatabase<typeof schema>;
