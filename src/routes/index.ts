import { Request, Response, Router } from "express";

import bikes from "./bikes";
import rents from "./rents";
import users from "../Modules/Users/routes/router";
import images from "./images";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Bike Rent 1.0.0");
});

routes.use("/api/bikes/", bikes);
routes.use("/api/rents/", rents);
routes.use("/api/users/", users);
routes.use("/api/images/", images);

export default routes;
