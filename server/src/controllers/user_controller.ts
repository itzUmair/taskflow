import { Request, Response } from "express";
import { CreateUser, GetUserByID } from "../data-access/users";

export const GetUser = async (req: Request, res: Response) => {
  const { userid } = req.params;
  try {
    const data = await GetUserByID(parseInt(userid));
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

export const SignUp = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  const username: string = email.split("@")[0];
  const response = await CreateUser(username, email, password);
  res.status(response.status).send({ message: response.message });
};
