import db from "../config/mySql.js";

interface CreateUserDTO {
  Username: string;
  Email: string;
  password: string;
}

class UserRepository {
  async create(data: CreateUserDTO) {
    const { Username, Email, password } = data;

    const [result]: any = await db.query(
      "INSERT INTO users (Username, Email, password) VALUES (?, ?, ?)",
      [Username, Email, password],
    );

    return {
      id: result.insertId,
      Username,
      Email,
    };
  }

  async findAll() {
    const [rows]: any = await db.query("SELECT id, Username, Email FROM users");
    return rows;
  }

  async findById(id: string) {
    const [rows]: any = await db.query(
      "SELECT id, Username, Email FROM users WHERE id = ?",
      [id],
    );

    return rows[0];
  }

  async update(id: string, data: any) {
    const { Username, Email } = data;

    await db.query("UPDATE users SET Username = ?, Email = ? WHERE id = ?", [
      Username,
      Email,
      id,
    ]);

    const [rows]: any = await db.query(
      "SELECT id, Username, Email FROM users WHERE id = ?",
      [id],
    );

    return rows[0];
  }

  async delete(id: string) {
    const [result]: any = await db.query("DELETE FROM users WHERE id = ?", [
      id,
    ]);

    return result;
  }
}

export default UserRepository;
