import AuthController from "../controllers/AuthController";
import { auth } from "../middleware/AuthMiddleware";
import validate from "../middleware/AuthValidator";
import BaseRoutes from "./BaseRouter";

class AuthRoutes extends BaseRoutes {
  public routes(): void {
    this.router.post("/register", validate, AuthController.register);
    this.router.post("/login", AuthController.login);
    this.router.get("/profile", auth, AuthController.profile);
  }
}

export default new AuthRoutes().router;
