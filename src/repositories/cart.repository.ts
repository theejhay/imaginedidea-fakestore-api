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

}

export default CartRepository;