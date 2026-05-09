import mongoose from "mongoose";
import ProductRepository from "../repositories/product.repository.js";

  function validateObjectId(id: string){
    if(!mongoose.isValidObjectId(id)){
      const err: any = new Error("Invalid product ID");
      err.statusCode = 400;
      throw err;
    }
    
  }
class ProductService {
  private repo: ProductRepository;

  constructor() {
    this.repo = new ProductRepository();
  }

  async createProduct(data: any) {
    return this.repo.create(data);
  }

  async getProducts() {
    return this.repo.findAll();
  }

  async getProductById(id: any) {
    validateObjectId(id);
    return this.repo.findById(id);
  }
  async updateProduct(id: any, data: any) {
    return this.repo.update(id, data);
  }

  async deleteProduct(id: any) {
    validateObjectId(id);
    const product = await this.repo.findById(id);
    if(!product){
      const err: any = new Error("Product not found!")
      err.statusCode = 404;
      throw err;
    }
    return this.repo.delete(id);
  }
}

export default ProductService;
