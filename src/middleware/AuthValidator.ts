import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

const validate = [
  check("username")
    .isString()
    .notEmpty()
    .withMessage("username should not empty"),
  check("password")
    .isLength({ min: 6 })
    .withMessage("password min 6 character"),
  (req: Request, res: Response, next: NextFunction) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res.status(422).send({ err: err.array() });
    }
    next();
  },
];

export default validate;
