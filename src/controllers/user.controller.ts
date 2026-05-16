import { Request, Response } from "express";
import UserService from "../services/user.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

class UserController {
  private service = new UserService();

  createUser = asyncHandler(async (req: Request, res: Response) => {
    const user = await this.service.createUser(req.body);

    res.status(201).json({ success: true, data: user });
  });

  getUsers = asyncHandler(async (_req: Request, res: Response) => {
    const users = await this.service.getUsers();

    res.json({ success: true, data: users });
  });

  getUserById = asyncHandler(async (req: Request, res: Response) => {
    const uuid = req.params.uuid as string;

    const user = await this.service.getUserByUuid(uuid);

    res.json({ success: true, data: user });
  });

  updateUser = asyncHandler(async (req: Request, res: Response) => {
    const uuid = req.params.uuid as string;

    const updated = await this.service.updateUser(uuid, req.body);

    res.json({ success: true, data: updated });
  });

  deleteUser = asyncHandler(async (req: Request, res: Response) => {
    const uuid = req.params.uuid as string;

    await this.service.deleteUser(uuid);

    res.status(204).send();
  });
}

export default UserController;
