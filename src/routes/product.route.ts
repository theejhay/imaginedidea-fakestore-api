import express from "express";
import ProductController from "../controllers/product.controller.js";
import authMiddleware from "../middlewares/auth.middleware.js";
import validate from "../middlewares/validate.middleware.js";
import { productSchema } from "../validation/product.validation.js";

const router = express.Router();

const productController = new ProductController();

router.post(
  "/",
  authMiddleware,
  validate(productSchema),
  productController.createProduct,
);

router.get("/", productController.getProducts);

router.get("/:id", productController.getProductById);
router.put("/:id", new ProductController().updateProduct);
router.delete("/:id", new ProductController().deleteProduct);

export default router;
