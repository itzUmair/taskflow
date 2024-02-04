import ConnectDB from "database";
import { eq, sql } from "drizzle-orm";
import { datetime, int, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const users = mysqlTable("users", {
  id: int("id").primaryKey().autoincrement(),
  username: varchar("username", { length: 256 }).notNull().unique(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 256 }).notNull(),
  date_created: datetime("date_created").default(sql`CURRENT_TIMESTAMP`),
});

export type User = typeof users.$inferSelect;
