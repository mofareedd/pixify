import type { InferSelectModel } from 'drizzle-orm';
import type * as schema from './schema';

export type Images = InferSelectModel<typeof schema.images>;
export type Template = InferSelectModel<typeof schema.templates>;
