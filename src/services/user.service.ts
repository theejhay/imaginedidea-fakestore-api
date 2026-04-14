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
  async updateUser(id: string, data: any) {
    const user = await this.repo.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    return this.repo.update(id, data);
  }

  async deleteUser(id: string) {
    const user = await this.repo.findById(id);

    if (!user) {
      throw new Error("User not found");
    }

    await this.repo.delete(id);

    return { message: "User deleted successfully" };
  }
}

export default UserService;
