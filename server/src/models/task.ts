import { sql } from "drizzle-orm";
import {
  int,
  mysqlTable,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { projects } from "./project";
import { users } from "./user";

export const tasks = mysqlTable("tasks", {
  id: int("id").primaryKey().autoincrement(),
  name: varchar("name", { length: 100 }).notNull(),
  description: varchar("description", { length: 500 }),
  deadline: timestamp("deadline").notNull(),
  priority: text("priority", { enum: ["low", "medium", "high"] }).notNull(),
  status: text("status", { enum: ["todo", "doing", "done"] }).notNull(),
  created_by: int("created_by")
    .references(() => users.id)
    .notNull(),
  created_on: timestamp("date_created").default(sql`CURRENT_TIMESTAMP`),
  marked_working_by: int("marked_working_by").references(() => users.id),
  marked_working_on: timestamp("marked_working_on").default(
    sql`CURRENT_TIMESTAMP`
  ),
  marked_complete_by: int("marked_complete_by").references(() => users.id),
  marked_complete_on: timestamp("marked_complete_on").default(
    sql`CURRENT_TIMESTAMP`
  ),
  project_id: int("project_id")
    .references(() => projects.id)
    .notNull(),
});

export type Task = typeof tasks.$inferSelect;
