import Cart from "../models/cart.model.js";

interface CreateCartDTO {
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
}

class CartRepository {
  async create(data: CreateCartDTO) {
    return Cart.create(data);
  }

  async findAll() {
    return Cart.find();
  }

  async findById(id: string) {
    return Cart.findById(id);
  }
  async update(id: string, data: CreateCartDTO) {
    return Cart.findByIdAndUpdate(id, data);
  }

  async delete(id: string) {
    return Cart.findByIdAndDelete(id);
  }
}

export default CartRepository;
