import { Request, Response } from "express";
import IController from "~/types/controller";

let dummyData = [
  { id: "1", name: "batman" },
  { id: "2", name: "superman" },
  { id: "3", name: "joker" },
  { id: "4", name: "lex" },
];

class UserController implements IController {
  index(req: Request, res: Response): Response {
    console.log("this is demo user index");
    return res.send(dummyData);
  }
  create(req: Request, res: Response): Response {
    const { id, name } = req.body;
    dummyData.push({ id, name });

    return res.send("create success");
  }
  show(req: Request, res: Response): Response {
    const { id } = req.params;
    let person = dummyData.find((item) => item.id === id);

    return res.send(person);
  }
  update(req: Request, res: Response): Response {
    const { id } = req.params;
    const { name } = req.body;
    let person = dummyData.find((item) => item.id === id);
    person.name = name;
    return res.send("update success");
  }
  delete(req: Request, res: Response): Response {
    const { id } = req.params;
    const user = dummyData.find((user) => user.id === id);
    if (!user) return res.status(404).send("user not found");
    dummyData.splice(dummyData.indexOf(user), 1);
    return res.send("delete suksees");
  }
}

export default new UserController();
