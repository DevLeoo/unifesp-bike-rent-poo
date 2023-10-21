import { Router } from "express";
import {
  deleteBike,
  getAllBikes,
  registerBike,
  findOneBike,
} from "../controllers";

const routes = Router();

routes.get("/", getAllBikes);

routes.get("/find", findOneBike);

routes.post("/register", registerBike);

routes.delete("/remove", deleteBike);

export default routes;
