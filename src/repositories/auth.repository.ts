import db from "../config/mySql.js";

class AuthRepository {
<<<<<<< HEAD
  async findByEmail(email: string) {
    const [rows]: any = await db.query(
      "SELECT id, username, email, password FROM users WHERE email = ?",
      [email],
    );
=======
  async findByEmail(Email: string) {
    const [rows]: any = await db.query("SELECT * FROM users WHERE Email = ?", [
      Email,
    ]);
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684

    return rows[0];
  }
}

export default AuthRepository;
