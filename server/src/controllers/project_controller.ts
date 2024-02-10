import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  ProjectDetail,
  ProjectDetails,
  ProjectTasks,
  UserCreatedProjects,
} from "../data-access/projects";

type UserToken = {
  userid: number;
  iat: number;
};

export const UserProjects = async (req: Request, res: Response) => {
  const { token } = req.params;
  const { userid } = jwt.decode(token) as UserToken;

  const projects = await UserCreatedProjects(userid);

  res.status(200).send({ message: "fetched successfully", data: projects });
};

export const CurrentProjectTasks = async (req: Request, res: Response) => {
  const { projectid } = req.params;

  const tasks = await ProjectTasks(parseInt(projectid));

  res.status(200).send({ message: "fetched successfully", data: tasks });
};
