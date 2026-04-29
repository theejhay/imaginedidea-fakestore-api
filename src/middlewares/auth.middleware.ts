import { Request, Response, NextFunction, RequestHandler } from "express";
import jwt from "jsonwebtoken";

export interface AuthRequest extends Request {
  user: any;
}

const authMiddleware: RequestHandler = (req, _res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    throw new Error("No token provided");
  }

  const token = authHeader.split(" ")[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string);

    (req as AuthRequest).user = decoded;

    next();
  } catch {
    throw new Error("Invalid token");
  }
};

export default authMiddleware;
