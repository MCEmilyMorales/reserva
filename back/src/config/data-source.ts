import { DataSource } from "typeorm";
import "reflect-metadata";

import {
  DB_TYPE,
  HOST,
  DB_PORT,
  DB_USERNAME,
  DB_NAME,
  DB_PASSWORD,
} from "./envs";

export const AppDataSource = new DataSource({
  type: DB_TYPE,
  host: HOST,
  port: DB_PORT,
  username: DB_USERNAME,
  database: DB_NAME,
  password: DB_PASSWORD,
  dropSchema: true,
  synchronize: true,
  //logging: true,
  entities: ["src/entities/*.ts"],
  subscribers: [],
  migrations: [],
});
