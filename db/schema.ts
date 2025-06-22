import { pgTable, text, uuid, varchar } from 'drizzle-orm/pg-core';

export const blogTable = pgTable('blog', {
    id: uuid().primaryKey().defaultRandom(),
    title: varchar('title', { length: 255 }).notNull(),
    body: text().notNull(),
    orgID: text().notNull(),
});

export type CreateBlogType = typeof blogTable.$inferInsert;
export type SelectBlogType = typeof blogTable.$inferSelect;
