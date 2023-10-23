import cors from "cors";
import helmet from "helmet";
import compression from "compression";
import { config as dotenv } from "dotenv";
import UserRoutes from "./routes/UserRoutes";
import AuthRoutes from "./routes/AuthRoutes";
import express, { Application } from "express";

class App {
  public app: Application;

  constructor() {
    this.app = express();
    this.plugins();
    this.routes();
    dotenv();
  }

  protected plugins(): void {
    this.app.use(express.json());
    this.app.use(helmet());
    this.app.use(compression());
    this.app.use(cors());
  }

  protected routes(): void {
    this.app.use("/", UserRoutes);
    this.app.use("/api/v1/users", UserRoutes);

    this.app.use("/api/v1/auth", AuthRoutes);
  }
}

const port: number = 8000;
const app = new App().app;

app.listen(port, () => {
  console.log(`running in port ${port}`);
});
