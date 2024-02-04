import ConnectDB from "database";
import { migrate } from "drizzle-orm/mysql2/migrator";

const Migrate = async () => {
  const { db, connection } = await ConnectDB();

  // This will run migrations on the database, skipping the ones already applied
  await migrate(db, { migrationsFolder: "./src/drizzle" });

  // Don't forget to close the connection, otherwise the script will hang
  await connection.end();
};

Migrate();
