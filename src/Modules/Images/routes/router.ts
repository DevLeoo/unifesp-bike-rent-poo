import { Router } from "express";
import {
  deleteImage,
  getAllImages,
  registerImage,
  findOneImage,
} from "../controllers";

const routes = Router();

routes.get("/", getAllImages);

routes.get("/find", findOneImage);

routes.post("/register", registerImage);

routes.delete("/remove", deleteImage);

export default routes;
