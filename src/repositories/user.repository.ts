import db from "../config/mySql.js";

<<<<<<< HEAD
class UserRepository {
  async create(data: any) {
    const { username, email, password } = data;

    const [result]: any = await db.query(
      "INSERT INTO users (username, email, password) VALUES (?, ?, ?)",
      [username, email, password],
=======
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
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    );

    return {
      id: result.insertId,
<<<<<<< HEAD
      username,
      email,
=======
      Username,
      Email,
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    };
  }

  async findAll() {
<<<<<<< HEAD
    const [rows]: any = await db.query("SELECT id, username, email FROM users");
=======
    const [rows]: any = await db.query("SELECT id, Username, Email FROM users");
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    return rows;
  }

  async findById(id: string) {
    const [rows]: any = await db.query(
<<<<<<< HEAD
      "SELECT id, username, email FROM users WHERE id = ?",
      [id],
    );
    return rows[0];
  }

  async findByEmail(email: string) {
    const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [
      email,
    ]);
=======
      "SELECT id, Username, Email FROM users WHERE id = ?",
      [id],
    );

>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
    return rows[0];
  }

  async update(id: string, data: any) {
<<<<<<< HEAD
    const { username, email } = data;

    await db.query("UPDATE users SET username = ?, email = ? WHERE id = ?", [
      username,
      email,
=======
    const { Username, Email } = data;

    await db.query("UPDATE users SET Username = ?, Email = ? WHERE id = ?", [
      Username,
      Email,
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
      id,
    ]);

    const [rows]: any = await db.query(
<<<<<<< HEAD
      "SELECT id, username, email FROM users WHERE id = ?",
=======
      "SELECT id, Username, Email FROM users WHERE id = ?",
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
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
