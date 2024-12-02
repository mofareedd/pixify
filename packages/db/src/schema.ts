import { relations, sql } from 'drizzle-orm';
import { pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

export const images = pgTable('images', {
  id: varchar('id', { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),

  url: varchar('url').notNull(),
  createdAt: timestamp('created_at', { withTimezone: true })
    .default(sql`CURRENT_TIMESTAMP`)
    .notNull(),
});

export const templates = pgTable('templates', {
  id: varchar('id', { length: 255 })
    .notNull()
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  name: varchar('name', { length: 150 }).notNull(),
  description: varchar('description', { length: 255 }).notNull(),
  imageId: varchar('image_id')
    .notNull()
    .references(() => images.id),
  createdAt: timestamp('created_at', { withTimezone: true }).default(
    sql`CURRENT_TIMESTAMP`
  ),
  updatedAt: timestamp('updated_at', { withTimezone: true }).$onUpdate(
    () => new Date()
  ),
});

export const templatesRelation = relations(templates, ({ one }) => ({
  image: one(images, { fields: [templates.imageId], references: [images.id] }),
}));
