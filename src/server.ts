import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { mainRouter } from "./routes";

const server = express();

server.use(cors());
server.use(bodyParser.json());
server.use(express.urlencoded({ extended: true }));
server.use(express.static("public"));
server.use("/", mainRouter);

const PORT = process.env.PORT || 3001;

server.listen(PORT, () => {
  console.log(`Server Listening in ${PORT}`);
  console.info(`Define your environment variables so there are no error`);
});
