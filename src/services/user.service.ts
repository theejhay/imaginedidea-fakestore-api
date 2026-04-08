import bcrypt from "bcrypt";
import UserRepository from "../repositories/user.repository.js";

class UserService {
  private repo: UserRepository;

  constructor() {
    this.repo = new UserRepository();
  }

  async createUser(data: any) {
    const { Username, Email, password } = data;

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.repo.create({
      Username,
      Email,
      password: hashedPassword,
    });
  }

  async getUsers() {
    return this.repo.findAll();
  }

  async getUserById(id: string) {
    const user = await this.repo.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return user;
  }
}

export default UserService;
