import db from "../config/mySql.js";
import bcrypt from "bcrypt";

class UserService {
  async createUser(data: any) {
    const { Username, Email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    const [result]: any = await db.query(
      "INSERT INTO users (Username, Email, password) VALUES (?, ?, ?)",
      [Username, Email, hashedPassword],
    );

    return {
      id: result.insertId,
      Username,
      Email,
    };
  }

  async getUsers() {
    const [rows]: any = await db.query("SELECT id, Username, Email FROM users");
    return rows;
  }

  async getUserById(id: string) {
    const [rows]: any = await db.query(
      "SELECT id, Username, Email FROM users WHERE id = ?",
      [id],
    );

    const user = rows[0];

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export default UserService;
