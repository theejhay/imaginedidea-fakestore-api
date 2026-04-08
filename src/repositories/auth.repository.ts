import db from "../config/mySql.js";

class AuthRepository {
  async findByEmail(Email: string) {
    const [rows]: any = await db.query("SELECT * FROM users WHERE Email = ?", [
      Email,
    ]);

    return rows[0];
  }
}

export default AuthRepository;
