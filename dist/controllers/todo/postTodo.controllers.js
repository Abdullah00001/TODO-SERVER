var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Todo } from "../../models/todo.models.js";
const postTodoControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newTodo = new Todo(req.body);
        const saveData = yield newTodo.save();
        const data = {
            _id: saveData._id,
            todoTitle: saveData.todoTitle,
            isComplete: saveData.isComplete,
        };
        res
            .status(201)
            .json({ status: "sccess", message: "New Todo Create Successful", data });
        return;
    }
    catch (error) {
        const err = error;
        console.log(err.message);
        next();
    }
});
export default postTodoControllers;
