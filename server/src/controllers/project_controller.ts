import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import {
  ProjectDetail,
  ProjectDetails,
  ProjectTasks,
  UserCreatedProjects,
} from "../data-access/projects";

export const UserProjects = async (req: Request, res: Response) => {
  let projects: any = [];
  const { token, currentproject } = req.params;
  const userid = parseInt(jwt.decode(token) as string);
  if (currentproject !== "notset") {
    const projectdetail = ProjectDetails(parseInt(currentproject));
    const projecttasks = ProjectTasks(parseInt(currentproject));

    Promise.all([projectdetail, projecttasks]).then((values) =>
      projects.push({ ...values[0], ...values[1] })
    );
    res.status(200).send({ message: "fetched successfully", data: projects });
  }
  const userprojects = await UserCreatedProjects(userid);
  for (let i = 0; i < userprojects.length; i++) {
    const projecttasks = await ProjectTasks(userprojects[i].id);
  }
};
