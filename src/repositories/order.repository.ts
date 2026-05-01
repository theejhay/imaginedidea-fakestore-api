import db from "../config/mySql.js";

<<<<<<< HEAD
export type Order = {
  id: number;
  user_id: number;
  total_amount: number;
};

class OrderRepository {
  async createOrder(userId: number, totalAmount: number): Promise<number> {
=======
class OrderRepository {
  async createOrder(userId: number, totalAmount: number) {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
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
<<<<<<< HEAD
  ): Promise<void> {
=======
  ) {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    await db.query(
      "INSERT INTO order_items (order_id, product_id, quantity, price) VALUES (?, ?, ?, ?)",
      [orderId, productId, quantity, price],
    );
  }

<<<<<<< HEAD
  async findOrdersByUser(userId: number): Promise<Order[]> {
=======
  async findOrdersByUser(userId: number) {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    const [rows]: any = await db.query(
      "SELECT * FROM orders WHERE user_id = ?",
      [userId],
    );

    return rows;
  }

<<<<<<< HEAD
  async findOrderItems(orderId: number): Promise<any[]> {
=======
  async findOrderItems(orderId: number) {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    const [rows]: any = await db.query(
      "SELECT * FROM order_items WHERE order_id = ?",
      [orderId],
    );

    return rows;
  }

<<<<<<< HEAD
  async findOrderById(orderId: number): Promise<Order | null> {
=======
  async findOrderById(orderId: number) {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    const [rows]: any = await db.query("SELECT * FROM orders WHERE id = ?", [
      orderId,
    ]);

<<<<<<< HEAD
    return rows[0] || null;
  }

  async deleteOrder(orderId: number): Promise<{ affectedRows: number }> {
=======
    return rows[0];
  }

  async deleteOrder(orderId: number) {
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    await db.query("DELETE FROM order_items WHERE order_id = ?", [orderId]);

    const [result]: any = await db.query("DELETE FROM orders WHERE id = ?", [
      orderId,
    ]);

    return result;
  }
}

export default OrderRepository;
