import Cart from "../models/cart.model.js";

interface CreateCartDTO {
  userId: number;
  productId: string;
  quantity: number;
}

interface UpdateCartDTO{
  quantity?: number;
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
  async update(id: string, data: UpdateCartDTO) {
    return Cart.findByIdAndUpdate(id, data, { new: true });
  }

  async delete(id: string) {
    return Cart.findByIdAndDelete(id);
  }
}

export default CartRepository;
