import { Router } from "express";
import {
  deleteRent,
  getAllRents,
  registerRent,
  findOneRent,
} from "../controllers";

const routes = Router();

routes.get("/", getAllRents);

routes.get("/find", findOneRent);

routes.post("/register", registerRent);

routes.delete("/remove", deleteRent);

export default routes;
