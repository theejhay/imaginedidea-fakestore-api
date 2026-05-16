import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthRepository from "../repositories/auth.repository.js";

class AuthService {
  private repo: AuthRepository;

  constructor() {
    this.repo = new AuthRepository();
  }

  async login(email: string, password: string) {
    const user = await this.repo.findByEmail(email);

    if (!user) {
      const err: any = new Error("User not found");
      err.statusCode = 404;
      throw err;
    }

    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      const err: any = new Error("Invalid credentials");
      err.statusCode = 401;
      throw err;
    }

    const tokenPayload = {
      uuid: user.uuid,
      username: user.username,
      email: user.email,
    };

    const token = jwt.sign(tokenPayload, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

    const { password: _, id: __, ...safeUser } = user;

    return {
      user: {
        ...tokenPayload,
        token,
      },
    };
  }
}

export default AuthService;
