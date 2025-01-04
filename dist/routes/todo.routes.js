import { Router } from "express";
import postTodoControllers from "../controllers/todo/postTodo.controllers.js";
import getAllTodoControllers from "../controllers/todo/getAllTodo.controllers.js";
import updateTodoControllers from "../controllers/todo/updateTodo.controllers.js";
import getTodoControllers from "../controllers/todo/getTodo.controllers.js";
import deleteTodoControllers from "../controllers/todo/deleteTodo.controllers.js";
import isCompleteTodoControllers from "../controllers/todo/isCompleteTodo.controllers.js";
const routes = Router();
routes.route("/todo").post(postTodoControllers).get(getAllTodoControllers);
routes
    .route("/todo/:id")
    .put(updateTodoControllers)
    .get(getTodoControllers)
    .delete(deleteTodoControllers)
    .patch(isCompleteTodoControllers);
export default routes;
