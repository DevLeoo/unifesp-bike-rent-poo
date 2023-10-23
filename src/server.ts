import { AppDataSource } from "./database/connection";
import app from "./main";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.PORT || 3000;

AppDataSource.initialize().then(async () => {
  console.log("📦 Database Connected 🔥");
  app.listen(PORT, () => {
    console.log(`Bike Rent Service running on port ${PORT}`);
    console.log(`The environment is on ${process.env.ENV}`);
  });
});

process.on("unhandledRejection", (reason, promise) => {
  console.log(`${new Date().toISOString()}: Unhandled Rejection at: ${reason}`);
});
