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
const isCompleteTodoControllers = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        yield Todo.findByIdAndUpdate(id, {
            $set: {
                isComplete: req.body.isComplete,
            },
        });
        res.status(200).json({
            ststatus: "success",
            message: "Task Completed",
        });
    }
    catch (error) {
        const err = error;
        console.log(err.message);
        next();
    }
});
export default isCompleteTodoControllers;
