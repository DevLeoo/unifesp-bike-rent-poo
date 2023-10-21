import { Router } from "express";
import {
  deleteUser,
  getAllUsers,
  registerUser,
  findOneUser,
} from "../controllers";

const routes = Router();

routes.get("/", getAllUsers);

routes.get("/find", findOneUser);

routes.post("/register", registerUser);

routes.delete("/remove", deleteUser);

export default routes;
