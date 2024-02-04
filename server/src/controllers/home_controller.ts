import { Request, Response } from "express";

export const get_home = async (req: Request, res: Response) => {
  res.status(200).send({ message: "Home Page" });
};
