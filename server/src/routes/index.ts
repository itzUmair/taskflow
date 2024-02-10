import express from "express";
import { get_home } from "../controllers/home_controller";
import {
  CurrentProjectTasks,
  UserProjects,
} from "../controllers/project_controller";
import { GetUser, SignIn, SignUp } from "../controllers/user_controller";

const router: express.Router = express.Router();

router.route("/").get(get_home);
router.route("/users/:userid").get(GetUser);
router.route("/users/signup").post(SignUp);
router.route("/users/signin").post(SignIn);
router.route("/projects/user/:token").get(UserProjects);
router.route("/projects/:projectid").get(CurrentProjectTasks);

export default router;
