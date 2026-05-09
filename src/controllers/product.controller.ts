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
    if (!product) throw new Error("product not found");
    res.json({
      success: true,
      data: product,
    });
  });

  updateProduct = asyncHandler(async (req: Request, res: Response) => {
    const product = await this.service.updateProduct(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: product,
    });
  });

  deleteProduct = asyncHandler(async (req: Request, res: Response) => {
    await this.service.deleteProduct(req.params.id);
    res.sendStatus(204);
  });
}

export default ProductController;
