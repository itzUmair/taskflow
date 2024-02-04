import bcrypt from "bcrypt";
import { eq } from "drizzle-orm";
import ConnectDB from "../database";
import { User, users } from "../models/user";

type Response = {
  status: number;
  success: boolean;
  message: string;
};

export const GetUserByID = async (id: number): Promise<User[]> => {
  const { db, connection } = await ConnectDB();
  const user = await db.select().from(users).where(eq(users.id, id));
  await connection.end();

  return user;
};

export const GetUserByUsername = async (username: string): Promise<User[]> => {
  const { db, connection } = await ConnectDB();
  const user = await db
    .select()
    .from(users)
    .where(eq(users.username, username));
  await connection.end();

  return user;
};

export const GetUserByEmail = async (email: string): Promise<User[]> => {
  const { db, connection } = await ConnectDB();
  const user = await db.select().from(users).where(eq(users.email, email));
  await connection.end();

  return user;
};

export const CreateUser = async (
  username: string,
  email: string,
  password: string
): Promise<Response> => {
  const { db, connection } = await ConnectDB();
  if (!username.length || !email.length || !password.length) {
    return { status: 400, success: false, message: "invalid data provided" };
  }
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    await db
      .insert(users)
      .values({ username, email, password: hashedPassword });
    return {
      status: 201,
      success: true,
      message: "account created successfully",
    };
  } catch (error) {
    if (error.errno && error.errno === 1062) {
      return {
        status: 400,
        success: false,
        message: "account with this email already exists",
      };
    }
    return { status: 500, success: false, message: "something went wrong" };
  } finally {
    await connection.end();
  }
};
