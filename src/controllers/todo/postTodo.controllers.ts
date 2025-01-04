import { NextFunction, Request, Response } from "express";
import { Todo } from "../../models/todo.models.js";
import { ObjectId } from "mongoose";

interface IResponseData {
  _id: string;
  todoTitle: String;
  isComplete: boolean;
}

const postTodoControllers = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const newTodo = new Todo(req.body);
    const saveData = await newTodo.save();
    const data: IResponseData = {
      _id: saveData._id as any,
      todoTitle: saveData.todoTitle,
      isComplete: saveData.isComplete,
    };
    res
      .status(201)
      .json({ status: "sccess", message: "New Todo Create Successful", data });
    return;
  } catch (error) {
    const err = error as any;
    console.log(err.message);
    next();
  }
};

export default postTodoControllers;
