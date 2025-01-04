import { NextFunction, Request, Response } from "express";
import { Todo } from "../../models/todo.models.js";

const getAllTodoControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const data = await Todo.aggregate([
      {
        $match: {
          isComplete: false,
        },
      },
      {
        $project: {
          _id: 1,
          todoTitle: 1,
          isComplete: 1,
        },
      },
    ]);
    // const data = await Todo.find({});
    res.status(200).json({
      status: "success",
      message: "All todo retrieves successful",
      data,
    });
    return;
  } catch (error) {
    const err = error as any;
    console.log(err.message);
    next();
  }
};

export default getAllTodoControllers;
