import ProductRepository from "../repositories/product.repository.js";

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
    return this.repo.findById(id);
  }

  async updateProduct(id: any, data: any) {
    return this.repo.update(id, data);
  }

  async deleteProduct(id: any) {
    return this.repo.delete(id);
  }
}

export default ProductService;
