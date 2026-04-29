import { Request, Response } from "express";
import AuthService from "../services/auth.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

class AuthController {
  service = new AuthService();

  login = asyncHandler(async (req: Request, res: Response) => {
<<<<<<< HEAD
    const { email, password } = req.body as {
      email: string;
      password: string;
    };

    const data = await this.service.login(email, password);
=======
    const { Email, password } = req.body;

    const data = await this.service.login(Email, password);
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684

    res.json({
      success: true,
      ...data,
    });
  });
}

export default AuthController;
