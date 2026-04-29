import { Request, Response } from "express";
import AuthService from "../services/auth.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

class AuthController {
  service = new AuthService();

  login = asyncHandler(async (req: Request, res: Response) => {
    const { email, password } = req.body as {
      email: string;
      password: string;
    };

    const data = await this.service.login(email, password);

    res.json({
      success: true,
      ...data,
    });
  });
}

export default AuthController;
