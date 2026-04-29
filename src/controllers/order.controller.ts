import { Request, Response } from "express";
import OrderService from "../services/order.service.js";
import asyncHandler from "../middlewares/asyncHandler.js";

<<<<<<< HEAD
interface AuthRequest extends Request {
  user: {
    id: number;
  };
}

class OrderController {
  service = new OrderService();

  createOrder = asyncHandler(async (req: AuthRequest, res: Response) => {
=======
class OrderController {
  service = new OrderService();

  createOrder = asyncHandler(async (req: any, res: Response) => {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
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

<<<<<<< HEAD
  getMyOrders = asyncHandler(async (req: AuthRequest, res: Response) => {
=======
  getMyOrders = asyncHandler(async (req: any, res: Response) => {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    const userId = req.user.id;

    const orders = await this.service.getMyOrders(userId);

    res.json({
      success: true,
      data: orders,
    });
  });

<<<<<<< HEAD
  getOrderById = asyncHandler(async (req: Request, res: Response) => {
=======
  getOrderById = asyncHandler(async (req: any, res: Response) => {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    const orderId = Number(req.params.id);

    const order = await this.service.getOrderById(orderId);

    res.json({
      success: true,
      data: order,
    });
  });

<<<<<<< HEAD
  deleteOrder = asyncHandler(async (req: Request, res: Response) => {
=======
  deleteOrder = asyncHandler(async (req: any, res: Response) => {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    const orderId = Number(req.params.id);

    const result = await this.service.deleteOrder(orderId);

    res.json({
      success: true,
      data: result,
    });
  });
}

export default OrderController;
