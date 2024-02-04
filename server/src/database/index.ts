import * as dotenv from "dotenv";
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";

dotenv.config();

const ConnectDB = async () => {
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
    database: process.env.DB_DATABASE as string,
  });
  const db = drizzle(connection);

  return { db, connection };
};

export default ConnectDB;
