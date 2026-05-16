import mongoose from "mongoose";
import CartRepository from "../repositories/cart.repository.js";
import UserRepository from "../repositories/user.repository.js";
import ProductRepository from "../repositories/product.repository.js";

function validateObjectId(id: string) {
  if (!mongoose.isValidObjectId(id)) {
    const err: any = new Error("Invaid Cart ID");
    err.statusCode = 400;
    throw err;
  }
}

class CartService {
  private repo: CartRepository;
  private userRepo: UserRepository;
  private productRepo: ProductRepository;

  constructor() {
    this.repo = new CartRepository();
    this.productRepo = new ProductRepository();
    this.userRepo = new UserRepository();
  }

  private async validateUserAndProductId(productId: string, userId: string): Promise<void>{
        // validate if user exists
    const user = await this.userRepo.findByUuid(userId);
    if (!user) {
      const err: any = new Error("User not Found");
      err.statusCode = 404;
      throw err;
    }

    // validate if productID valid
    validateObjectId(productId);

    // validate if productID exist
    const product = await this.productRepo.findById(productId);
    if (!product) {
      const err: any = new Error("Product not Found");
      err.statusCode = 404;
      throw err;
    }
  }

  async createCart(data: any) {
    const { userId, productId, quantity } = data;

    await this.validateUserAndProductId(productId, userId);

    return this.repo.create(data);
  }

  async getCarts() {
    return this.repo.findAll();
  }

  async getCartById(id: any) {
    validateObjectId(id);
    const cart = await this.repo.findById(id);
    if (!cart) {
      const err: any = new Error("Cart not found");
      err.statusCode = 404;
      throw err;
    }
    return this.repo.findById(id);
  }
  async updateCart(id: any, data: any) {
    const { userId, productId, quantity } = data;

    const cart = await this.repo.findById(id);
    if (!cart) {
      const err: any = new Error("Cart not found");
      err.statusCode = 404;
      throw err;
    }

    await this.validateUserAndProductId(productId, userId);

    return this.repo.update(id, data);
  }

  async deleteCart(id: any) {
    validateObjectId(id);
    const cart = await this.repo.findById(id);
    if (!cart) {
      const err: any = new Error("Cart not found");
      err.statusCode = 404;
      throw err;
    }
    return this.repo.delete(id);
  }
}

export default CartService;
