import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

export const auth = (req: Request, res: Response, next: NextFunction) => {
  if (!req.headers.authorization) {
    return res.status(401).send("not authenticated, token not found");
  }

  let secretKey = process.env.jwt_secret || "secret banget";
  const token = req.headers.authorization.split(" ")[1];

  try {
    const credential = jwt.verify(token, secretKey);
    if (credential) {
      req.app.locals.credential = credential;
      next();
    } else {
      return res.send("token invalid");
    }
  } catch (error) {
    return res.status(400).send(error);
  }
};
