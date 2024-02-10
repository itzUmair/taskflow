import { eq } from "drizzle-orm";
import ConnectDB from "../database";
import { Project, projects } from "../models/project";
import { Task, tasks } from "../models/task";

export type ProjectDetail = Project & Task[];

export const ProjectDetails = async (projectid: number): Promise<Project> => {
  const { db, connection } = await ConnectDB();

  const projectdetails = await db
    .select()
    .from(projects)
    .where(eq(projects.id, projectid));

  connection.end();
  return projectdetails[0];
};

export const UserCreatedProjects = async (
  userid: number
): Promise<Project[]> => {
  const { db, connection } = await ConnectDB();

  const userprojects = await db
    .select()
    .from(projects)
    .where(eq(projects.created_by, userid));

  connection.end();
  return userprojects;
};

export const ProjectTasks = async (projectid: number): Promise<Task[]> => {
  const { db, connection } = await ConnectDB();

  const projecttasks = await db
    .select()
    .from(tasks)
    .where(eq(tasks.project_id, projectid));

  connection.end();
  return projecttasks;
};
