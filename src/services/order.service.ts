import OrderRepository from "../repositories/order.repository.js";

class OrderService {
  private repo: OrderRepository;

  constructor() {
    this.repo = new OrderRepository();
  }

  async createOrder(data: any) {
    const { userId, items } = data;

    let totalAmount = 0;
    for (const item of items) {
      totalAmount += item.price * item.quantity;
    }

    const orderId = await this.repo.createOrder(userId, totalAmount);

    for (const item of items) {
      await this.repo.createOrderItem(
        orderId,
        item.productId,
        item.quantity,
        item.price,
      );
    }

    return {
      orderId,
      userId,
      totalAmount,
      status: "pending",
      items,
    };
  }

  async getMyOrders(userId: number) {
    const orders = await this.repo.findOrdersByUser(userId);

    for (const order of orders) {
      const items = await this.repo.findOrderItems(order.id);
      order.items = items;
    }

    return orders;
  }
}

export default OrderService;
