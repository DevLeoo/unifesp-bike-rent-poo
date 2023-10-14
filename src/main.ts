import bodyParser from "body-parser";
import cors from "cors";
import express from "express";

import routes from "./routes";

class App {
  public app: express.Application;
  public static resource = "DFESERVICE";

  constructor() {
    this.app = express();
    this.config();
  }

  private config(): void {
    this.app.use(cors());
    this.app.use(bodyParser.json({ limit: "150mb" }));
    this.app.use(bodyParser.urlencoded({ limit: "150mb", extended: false }));
    this.app.use(routes);
    this.app.disable("x-powered-by");
  }
}

export default new App().app;
