import { NextFunction, Request, Response } from "express";
import { Todo } from "../../models/todo.models.js";

const isCompleteTodoControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndUpdate(id, {
      $set: {
        isComplete: req.body.isComplete,
      },
    });
    res.status(200).json({
      ststatus: "success",
      message: "Task Completed",
    });
  } catch (error) {
    const err = error as any;
    console.log(err.message);
    next();
  }
};

export default isCompleteTodoControllers;
