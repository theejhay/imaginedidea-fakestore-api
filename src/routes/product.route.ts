import express from "express";
import ProductController from "../controllers/product.controller.js";
import validate from "../middlewares/validate.middleware.js";
import { productSchema } from "../validation/product.validation.js";

const router = express.Router();

router.post(
  "/products",
  validate(productSchema),
  new ProductController().createProduct,
);
router.get("/products", new ProductController().getProducts);
router.get("/products/:id", new ProductController().getProductById);

export default router;
