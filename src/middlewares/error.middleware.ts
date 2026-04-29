import { Request, Response, NextFunction } from "express";

<<<<<<< HEAD
interface CustomError extends Error {
  statusCode?: number;
}

const errorMiddleware = (
  err: CustomError,
=======
const errorMiddleware = (
  err: any,
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
<<<<<<< HEAD
  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    success: false,
    message: err.message || "Internal Server Error",
=======
  res.status(500).json({
    success: false,
    message: err.message,
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
  });
};

export default errorMiddleware;
