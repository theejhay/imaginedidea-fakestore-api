import db from "../config/mySql.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

class AuthService {
  async login(Email: string, password: string) {
    const [rows]: any = await db.query("SELECT * FROM users WHERE Email = ?", [
      Email,
    ]);

    const user = rows[0];

    if (!user) throw new Error("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    delete user.password;

    return { user, token };
  }
}

export default AuthService;
