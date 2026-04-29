import express from "express";
import AuthController from "../controllers/auth.controller.js";
import rateLimiter from "../middlewares/rateLimit.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { loginSchema } from "../validation/user.validation.js";

const router = express.Router();
const controller = new AuthController();

router.post("/login", rateLimiter, validate(loginSchema), controller.login);

export default router;
