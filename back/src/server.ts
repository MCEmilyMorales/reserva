import express from "express";
import router from "./routes/index.router";
import morgan from "morgan";
import cors from "cors";

//usamos a express
const server = express();
//middlewares
server.use(express.json());
server.use(morgan("dev"));
server.use(cors());
server.use(router);

export default server;
