import express from "express";
import CartController from "../controllers/cart.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import CartSchema from "../validation/cart.validation.js";

const router = express.Router();

const cartController = new CartController();

router.post(
  "/",
  authMiddleware,
  validate(CartSchema),
  cartController.createCart,
);

router.get("/", cartController.getCarts);
router.get("/:id", cartController.getCartById);
export default router;
