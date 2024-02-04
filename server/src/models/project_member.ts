import { int, mysqlTable, primaryKey } from "drizzle-orm/mysql-core";
import { projects } from "./project";
import { users } from "./user";

export const project_members = mysqlTable(
  "project_members",
  {
    project_id: int("project_id")
      .references(() => projects.id)
      .notNull(),
    user_id: int("user_id")
      .references(() => users.id)
      .notNull(),
  },
  (table) => {
    return {
      pk: primaryKey({ columns: [table.project_id, table.user_id] }),
    };
  }
);

export type Project_Member = typeof project_members.$inferSelect;
