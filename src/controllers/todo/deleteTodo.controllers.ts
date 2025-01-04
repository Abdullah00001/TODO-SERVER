import { NextFunction, Request, Response } from "express";
import { Todo } from "../../models/todo.models.js";

const deleteTodoControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const { id } = req.params;
    await Todo.findByIdAndDelete(id);
    res.status(200).json({
      status: "success",
      message: "Todo Delete Successful",
      deletedID: id,
    });
    return;
  } catch (error) {
    const err = error as any;
    console.log(err.message);
    next();
  }
};

export default deleteTodoControllers;
