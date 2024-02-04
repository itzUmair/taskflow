import { sql } from "drizzle-orm";
import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { projects } from "./project";

export const logs = mysqlTable("logs", {
  id: int("id").primaryKey().autoincrement(),
  message: varchar("message", { length: 256 }).notNull(),
  date: timestamp("date").default(sql`CURRENT_TIMESTAMP`),
  project_id: int("project_id")
    .references(() => projects.id)
    .notNull(),
});
