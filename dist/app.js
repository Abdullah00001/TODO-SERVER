import cors from "cors";
import express from "express";
import { baseUrl } from "./constants.js";
const app = express();
app.use(express.json());
app.use(cors({ origin: "http://localhost:5173" }));
/* =======================================
-------------------ROUTES-----------------
========================================= */
import TodoRoutes from "./routes/todo.routes.js";
import serverError from "./middlewares/serverError.middlewares.js";
app.use(baseUrl, TodoRoutes);
app.use(serverError);
export default app;
