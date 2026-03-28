import { Request, Response } from "express";
import AuthService from "../services/auth.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

class AuthController {
  service = new AuthService();

  login = asyncHandler(async (req: Request, res: Response) => {
    const { Email, password } = req.body;

    const data = await this.service.login(Email, password);

    res.json({
      success: true,
      ...data,
    });
  });
}

export default AuthController;
