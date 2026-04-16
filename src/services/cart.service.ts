import CartRepository from "../repositories/cart.repository.js"

class CartService{

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
    return this.repo.findById(id);
  }

  async updateCart(id: any, data: any){
    return this.repo.update(id, data);
  }

  async deleteCart(id: any){
    return this.repo.delete(id);
  }
}

export default CartService;
