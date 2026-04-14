import { Request, Response } from "express";
import UserService from "../services/user.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

interface UserParams {
  id: string;
}

interface CreateUserBody {
  Username: string;
  Email: string;
  password: string;
}

class UserController {
  service = new UserService();

  createUser = asyncHandler(
    async (req: Request<{}, {}, CreateUserBody>, res: Response) => {
      const { Username, Email, password } = req.body;

      const user = await this.service.createUser({
        Username,
        Email,
        password,
      });

      res.status(201).json({
        success: true,
        data: user,
      });
    },
  );

  getUsers = asyncHandler(async (_req: Request, res: Response) => {
    const users = await this.service.getUsers();

    res.json({
      success: true,
      data: users,
    });
  });

  getUserById = asyncHandler(
    async (req: Request<UserParams>, res: Response) => {
      const { id } = req.params;

      if (!id) {
        throw new Error("User ID is required");
      }

      const user = await this.service.getUserById(id);

      res.json({
        success: true,
        data: user,
      });
    },
  );

  updateUser = asyncHandler(async (req: Request<UserParams>, res: Response) => {
    const { id } = req.params;

    const updatedUser = await this.service.updateUser(id, req.body);

    res.json({
      success: true,
      data: updatedUser,
    });
  });

  deleteUser = asyncHandler(async (req: Request<UserParams>, res: Response) => {
    const { id } = req.params;

    const result = await this.service.deleteUser(id);

    res.json({
      success: true,
      data: result,
    });
  });
}

export default UserController;
