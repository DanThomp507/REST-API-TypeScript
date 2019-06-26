import { Request, Response } from "express";

export let hello = (req: Request, res: Response) => {
  res.send("hello world");
};

export let hiya = (req: Request, res: Response) => {
  res.send("hello");
}

export let wonderful = (req: Request, res: Response) => {
  res.send("It's a wonderful day");
};
