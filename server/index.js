import cors from "cors";
import * as dotenv from "dotenv";
import express from "express";
import logger from "./middlewares/logger.js";

dotenv.config();

const app = express();

app.use(
  cors({
    origins: ["http://localhost:5173"],
    methods: "*",
    withCredentials: true,
  })
);

app.use(logger);

const StartServer = async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
};

StartServer();
