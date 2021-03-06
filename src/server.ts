import express from "express";
import config from "./config";
import { router } from "./routes";
const cors = require("cors");
const morgan = require("morgan");

export const server = express();

server.set("port", config.port);
server.set("key", config.key);

const corsOptions = {};
server.use(cors(corsOptions));
server.use(morgan("dev"));
server.use(express.json());
server.use(express.urlencoded({ extended: false }));
server.use("/api/v1", router);
