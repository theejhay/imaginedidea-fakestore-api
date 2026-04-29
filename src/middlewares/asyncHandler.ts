<<<<<<< HEAD
import { Request, Response, NextFunction, RequestHandler } from "express";

const asyncHandler =
  (fn: Function): RequestHandler =>
  (req: Request, res: Response, next: NextFunction) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };

export default asyncHandler;
=======
import { Request, Response, NextFunction } from "express";

const asyncHandler = (fn: any) => {
    return (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
};

export default asyncHandler;
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
