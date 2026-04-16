import {Request, Response} from "express";
import CartService from "../services/cart.service.js"
import asyncHandler from "../middlewares/asyncHandler.js";

class CartController{
    service = new CartService();

    createCart = asyncHandler (async(req: Request, res: Response) => {
        const cart = await this.service.createCart(req.body);
        res.status(201).json({
            success: true,
            data: cart
        });
    });

    getCarts = asyncHandler (async(req: Request, res: Response) => {
        const cart = await this.service.getCarts();
        res.json({
            success: true,
            data: cart
        });
    });

    getCartById = asyncHandler (async(req: Request, res: Response) => {
        const cart = await this.service.getCartById(req.params.id);
        res.json({
            success: true,
            data: cart
        });
    });

    updateCart = asyncHandler (async(req: Request, res: Response)=> {
        const cart = await this.service.updateCart(req.params.id, req.body);
        res.json({
            success: true,
            data: cart
        });
    });

    deleteCart = asyncHandler (async(req: Request, res: Response)=> {
        const cart = await this.service.deleteCart(req.params.id);
        res.json({
            success: true,
            data: cart
        })
    });
};


export default CartController;