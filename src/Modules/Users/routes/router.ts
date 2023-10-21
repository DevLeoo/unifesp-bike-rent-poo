import { Router } from "express";
import { getAllUsers } from "../controllers";

const routes = Router();

routes.get("/", getAllUsers);

export default routes;
