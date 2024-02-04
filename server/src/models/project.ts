import { sql } from "drizzle-orm";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { users } from "./user";

export const projects = mysqlTable("projects", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 500 }),
  date_created: timestamp("date_created").default(sql`CURRENT_TIMESTAMP`),
  created_by: int("created_by")
    .references(() => users.id)
    .notNull(),
});

export type Project = typeof projects.$inferSelect;
