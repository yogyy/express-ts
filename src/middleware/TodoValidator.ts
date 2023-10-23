import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

const validate = [
  check("description").notEmpty().withMessage("description should not empty"),
  (req: Request, res: Response, next: NextFunction) => {
    const err = validationResult(req);

    if (!err.isEmpty()) {
      return res.status(422).send({ err: err.array() });
    }
    return next();
  },
];

export default validate;
