<<<<<<< HEAD
import UserRepository from "../repositories/user.repository.js";
import bcrypt from "bcrypt";

class UserService {
  private repo = new UserRepository();

  async createUser(data: {
    username: string;
    email: string;
    password: string;
  }) {
    const { username, email, password } = data;

    const existingUser = await this.repo.findByEmail(email);

    if (existingUser) {
      throw new Error("Email already exists");
    }
=======
import bcrypt from "bcrypt";
import UserRepository from "../repositories/user.repository.js";

class UserService {
  private repo: UserRepository;

  constructor() {
    this.repo = new UserRepository();
  }

  async createUser(data: any) {
    const { Username, Email, password } = data;
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684

    const hashedPassword = await bcrypt.hash(password, 10);

    return this.repo.create({
<<<<<<< HEAD
      username,
      email,
=======
      Username,
      Email,
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684
      password: hashedPassword,
    });
  }

  async getUsers() {
    return this.repo.findAll();
  }

  async getUserById(id: string) {
    const user = await this.repo.findById(id);

<<<<<<< HEAD
    if (!user) throw new Error("User not found");

    return user;
  }

  async updateUser(id: string, data: any) {
    const user = await this.repo.findById(id);

    if (!user) throw new Error("User not found");
=======
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
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684

    return this.repo.update(id, data);
  }

  async deleteUser(id: string) {
    const user = await this.repo.findById(id);

<<<<<<< HEAD
    if (!user) throw new Error("User not found");
=======
    if (!user) {
      throw new Error("User not found");
    }
>>>>>>> f6c895a32070737cc5a839ee4a4e985926d95684

    await this.repo.delete(id);

    return { message: "User deleted successfully" };
  }
}

export default UserService;
