import mongoose from "mongoose";
import CartRepository from "../repositories/cart.repository.js";


function validateObjectId(id: string){
  if(!mongoose.isValidObjectId(id)){
    const err: any = new Error("Invaid Cart ID")
    err.statusCode = 400;
    throw err;
  }
}

class CartService {
  private repo: CartRepository;

  constructor() {
    this.repo = new CartRepository();
  }

  async createCart(data: any) {
    return this.repo.create(data);
  }

  async getCarts() {
    return this.repo.findAll();
  }

  async getCartById(id: any) {
    validateObjectId(id);
    const cart = await this.repo.findById(id);
    if(!cart){
      const err: any = new Error("Cart not found")
      err.statusCode = 404;
      throw err;
    }
    return this.repo.findById(id);
  }
  async updateCart(id: any, data: any) {
    const cart = await this.repo.findById(id);
    if(!cart){
      const err: any = new Error("Cart not found")
      err.statusCode = 404;
      throw err;
    }
    return this.repo.update(id, data);
  }

  async deleteCart(id: any) {
    validateObjectId(id);
    const cart = await this.repo.findById(id);
    if(!cart){
      const err: any = new Error("Cart not found")
      err.statusCode = 404;
      throw err;
    }
    return this.repo.delete(id);
  }
}

export default CartService;
