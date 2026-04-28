import Cart from "../models/cart.model.js";

interface CreateCartDTO {
  userId: String;
  productId: String;
  quantity: Number;
}

class CartRepository {
  async create(data: any) {
    return Cart.create(data);
  }

  async findAll() {
    return Cart.find();
  }

  async findById(id: string) {
    return Cart.findById(id);
  }
  async update(id: string, data: CreateCartDTO) {
    return Cart.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return Cart.findByIdAndDelete(id);
  }
}

export default CartRepository;
