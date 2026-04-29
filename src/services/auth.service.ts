import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import AuthRepository from "../repositories/auth.repository.js";

class AuthService {
  private repo: AuthRepository;

  constructor() {
    this.repo = new AuthRepository();
  }

<<<<<<< HEAD
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
=======
  async login(Email: string, password: string) {
    const user = await this.repo.findByEmail(Email);

    if (!user) throw new Error("User not found");

    const match = await bcrypt.compare(password, user.password);
    if (!match) throw new Error("Invalid credentials");
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, {
      expiresIn: "1d",
    });

<<<<<<< HEAD
    const { password: _, ...safeUser } = user;

    return {
      user: safeUser,
      token,
    };
  }
}
=======
    delete user.password;

    return { user, token };
  }
}

>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
export default AuthService;
