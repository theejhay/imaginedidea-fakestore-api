import db from "../config/mySql.js";

class AuthRepository {
  async findByEmail(email: string) {
    const [rows]: any = await db.query(
      "SELECT id, username, email, password FROM users WHERE email = ?",
      [email],
    );
    return rows[0];
  }
}

export default AuthRepository;
