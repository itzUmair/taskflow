import { NextFunction, Request, Response } from "express";

const logger = async (req: Request, res: Response, next: NextFunction) => {
  console.log(new Date().toLocaleString(), "\t", req.method, "\t", req.url);
  next();
};

export default logger;
