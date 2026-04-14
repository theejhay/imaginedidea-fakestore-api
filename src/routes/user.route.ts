import express from "express";
import UserController from "../controllers/user.controller.js";
import rateLimiter from "../middlewares/rateLimit.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { registerSchema } from "../validation/user.validation.js";

const router = express.Router();
const controller = new UserController();

router.post(
  "/register",
  rateLimiter,
  validate(registerSchema),
  controller.createUser,
);

router.get("/", controller.getUsers);

router.get("/:id", controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

export default router;
