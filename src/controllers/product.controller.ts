import { Request, Response, NextFunction } from "express";
import ProductService from "../services/product.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

class ProductController {
  service = new ProductService();

  createProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await this.service.createProduct(req.body);
    res.status(201).json({
      success: true,
      data: product,
    });
  });

  getProducts = asyncHandler(async (req: Request, res: Response) => {
    const product = await this.service.getProducts();
    res.json({
      success: true,
      data: product,
    });
  });

  getProductById = asyncHandler(async (req: Request, res: Response) => {
    const product = await this.service.getProductById(req.params.id);
    res.json({
      success: true,
      data: product,
    });
  });
}

export default ProductController;
