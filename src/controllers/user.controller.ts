import { Request, Response } from "express";
import UserService from "../services/user.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

<<<<<<< HEAD
class UserController {
  private service = new UserService();

  createUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.service.createUser(req.body);

    res.status(201).json({ success: true, data: user });
  });
=======
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
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684

  getUsers = asyncHandler(async (_req: Request, res: Response) => {
    const users = await this.service.getUsers();

<<<<<<< HEAD
    res.json({ success: true, data: users });
  });

  getUserById = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const user = await this.service.getUserById(id);

    res.json({ success: true, data: user });
  });

  updateUser = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const updated = await this.service.updateUser(id, req.body);

    res.json({ success: true, data: updated });
  });

  deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const id = req.params.id as string;

    const result = await this.service.deleteUser(id);

    res.json({ success: true, data: result });
=======
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
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
  });
}

export default UserController;
