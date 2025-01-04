import { NextFunction, Request, Response } from "express";
import { Todo } from "../../models/todo.models.js";

const getTodoControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    const data = await Todo.findById(id);
    res
      .status(200)
      .json({ status: "success", message: "Retrieve Todo Successful", data });
      return
  } catch (error) {
    const err = error as any;
    console.log(err.message);
    next();
  }
};

export default getTodoControllers;
