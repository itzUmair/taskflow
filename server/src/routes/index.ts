import express from "express";
import { get_home } from "../controllers/home_controller";

const router: express.Router = express.Router();

router.route("/").get(get_home);

export default router;
