import { Request, Response, Router } from "express";

import bikes from "../Modules/Bikes/routes/router";
import rents from "../Modules/Rents/routes/router";
import users from "../Modules/Users/routes/router";
import images from "../Modules/Images/routes/router";

const routes = Router();

routes.get("/", (req: Request, res: Response) => {
  res.send("Bike Rent 1.0.0");
});

routes.use("/api/bikes/", bikes);
routes.use("/api/rents/", rents);
routes.use("/api/users/", users);
routes.use("/api/images/", images);

export default routes;
