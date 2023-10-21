import * as dotenv from "dotenv";
import * as path from "path";
import { DataSource } from "typeorm";
import { PostgresConnectionOptions } from "typeorm/driver/postgres/PostgresConnectionOptions";
import { CreateUsersTable1697916588346 } from "./migrations/1697916588346-CreateUsersTable";
import User from "../Modules/Users/entities/user-entity";
import { CreateBikesTable1697922194541 } from "./migrations/1697922194541-CreateBikesTable";

dotenv.config();

export const dbConfig: PostgresConnectionOptions = {
  type: "postgres",
  host: process.env.DB_HOST,
  port: +process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: [User],
  migrations: [CreateUsersTable1697916588346, CreateBikesTable1697922194541],
  synchronize: true,
};

export const AppDataSource = new DataSource(dbConfig);

//npm run typeorm migration:create src/database/migrations/CreateUsersTable
// npm run typeorm -- -d src/database/connection.ts migration:run
