import { Request, Response } from "express";

const serverError = (req: Request, res: Response): void => {
  res.status(500).json({ status: "error", message: "Internal Server Error" });
  return;
};

export default serverError;
