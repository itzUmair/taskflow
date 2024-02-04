import express from "express";
import { get_home } from "../controllers/home_controller";
import { GetUser, SignUp } from "../controllers/user_controller";

const router: express.Router = express.Router();

router.route("/").get(get_home);
router.route("/users/:userid").get(GetUser);
router.route("/users/signup").post(SignUp);

export default router;
