import { Request, Response } from "express";
import OrderService from "../services/order.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

class OrderController {
  service = new OrderService();

  createOrder = asyncHandler(async (req: any, res: Response) => {
    const userId = req.user.id;
    const { items } = req.body;

    const order = await this.service.createOrder({
      userId,
      items,
    });

    res.status(201).json({
      success: true,
      data: order,
    });
  });

  getMyOrders = asyncHandler(async (req: any, res: Response) => {
    const userId = req.user.id;

    const orders = await this.service.getMyOrders(userId);

    res.json({
      success: true,
      data: orders,
    });
  });
}

export default OrderController;
