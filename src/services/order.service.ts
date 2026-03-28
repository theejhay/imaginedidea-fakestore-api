import OrderModel from "../models/order.model.js";

class OrderService {
  model = new OrderModel();

  async createOrder(data: any) {
    const { userId, items } = data;

    let totalAmount = 0;
    for (const item of items) {
      totalAmount += item.price * item.quantity;
    }

    const orderId = await this.model.createOrder(userId, totalAmount);

    for (const item of items) {
      await this.model.createOrderItem(
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
    const orders = await this.model.getOrdersByUser(userId);

    for (const order of orders) {
      const items = await this.model.getOrderItems(order.id);
      order.items = items;
    }

    return orders;
  }
}

export default OrderService;
