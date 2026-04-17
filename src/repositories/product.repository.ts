import Product from "../models/product.model.js";

interface CreateProductDTO {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

class ProductRepository {
  async create(data: CreateProductDTO) {
    return Product.create(data);
  }

  async findAll() {
    return Product.find();
  }

  async findById(id: string) {
    return Product.findById(id);
  }
  async update(id: string, data: any) {
    return Product.findByIdAndUpdate(id, data);
  }

  async delete(id: string) {
    return Product.findByIdAndDelete(id);
  }
}

export default ProductRepository;
