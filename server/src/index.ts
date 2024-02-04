import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import logger from "./middlewares/logger";
import router from "./routes";

dotenv.config();

const app = express();

const options = {
  origin: ["http://localhost:5173"],
  methods: "*",
  credentials: true,
};

app.use(cors(options));
app.use(express.json());
app.use(logger);
app.use(router);

const StartServer = async () => {
  app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT}`);
  });
};

StartServer();
