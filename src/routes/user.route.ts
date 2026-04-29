import express from "express";
import UserController from "../controllers/user.controller.js";
import rateLimiter from "../middlewares/rateLimit.middleware.js";
import validate from "../middlewares/validate.middleware.js";
<<<<<<< HEAD
import authMiddleware from "../middlewares/auth.middleware.js";
=======
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
import { registerSchema } from "../validation/user.validation.js";

const router = express.Router();
const controller = new UserController();

router.post(
  "/register",
  rateLimiter,
  validate(registerSchema),
  controller.createUser,
);

<<<<<<< HEAD
router.get("/", authMiddleware, controller.getUsers);
router.get("/:id", authMiddleware, controller.getUserById);
router.put(
  "/:id",
  authMiddleware,
  validate(registerSchema),
  controller.updateUser,
);
router.delete("/:id", authMiddleware, controller.deleteUser);
=======
router.get("/", controller.getUsers);

router.get("/:id", controller.getUserById);
router.put("/:id", controller.updateUser);
router.delete("/:id", controller.deleteUser);

>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
export default router;
