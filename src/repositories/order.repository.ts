import db from "../config/mySql.js";

class OrderRepository {
  async createOrder(userId: number, totalAmount: number) {
    const [result]: any = await db.query(
      "INSERT INTO orders (user_id, total_amount) VALUES (?, ?)",
      [userId, totalAmount],
    );

    return result.insertId;
  }

  async createOrderItem(
    orderId: number,
    productId: string,
    quantity: number,
    price: number,
  ) {
    await db.query(
      "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
      [orderId, productId, quantity, price],
    );
  }

  async findOrdersByUser(userId: number) {
    const [rows]: any = await db.query(
      "SELECT * FROM orders WHERE user_id = ?",
      [userId],
    );

    return rows;
  }

  async findOrderItems(orderId: number) {
    const [rows]: any = await db.query(
      "SELECT * FROM order_items WHERE order_id = ?",
      [orderId],
    );

    return rows;
  }
}

export default OrderRepository;
