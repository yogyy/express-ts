import { Request, Response } from "express";
import Authentication from "../utils/authentication";
const db = require("../db/models");

class AuthController {
  register = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    const hassPassword: string = await Authentication.passHash(password);
    await db.user.create({
      username,
      password: hassPassword,
    });

    return res.send("created user success");
  };

  login = async (req: Request, res: Response): Promise<Response> => {
    let { username, password } = req.body;

    const user = await db.user.findOne({
      where: { username },
    });

    let compare = await Authentication.comparePass(password, user.password);

    if (compare) {
      let token = Authentication.generateToken(
        user.id,
        username,
        user.password
      );
      return res.send({ token });
    }

    return res.send("failed login");
  };

  profile = (req: Request, res: Response): Response => {
    return res.send(req.app.locals.credential);
  };
}

export default new AuthController();
