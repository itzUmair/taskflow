import bcrypt from "bcrypt";
import * as dotenv from "dotenv";
import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { CreateUser, GetUserByEmail, GetUserByID } from "../data-access/users";

dotenv.config();

export const GetUser = async (req: Request, res: Response) => {
  const { userid } = req.params;
  const user = await GetUserByID(parseInt(userid));
  if (user.length === 0) {
    res.status(404).send({ message: "no user with was found" });
    return;
  }
  res.status(200).send({ message: "user found", data: user[0] });
};

export const SignUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const username: string = email.split("@")[0];
  const response = await CreateUser(username, email, password);
  res.status(response.status).send({ message: response.message });
};

export const SignIn = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const user = await GetUserByEmail(email);
  if (user.length === 0) {
    res.status(404).send({ message: "no user with was found" });
    return;
  }
  const validPassword = await bcrypt.compare(password, user[0].password);

  if (!validPassword) {
    res.status(401).send({ message: "incorrect password" });
    return;
  }

  const token: string = jwt.sign(
    { userid: user[0].id },
    process.env.AUTH_SECRET
  );

  res.status(200).send({ message: "logged in successfully", data: token });
};
