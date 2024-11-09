import { User } from "../models/user";
import bcrypt from "bcryptjs";
import { AppDataSource } from "../ormconfig";

class UserService {
  async createUser(
    full_name: string,
    email: string,
    password: string,
    role: string
  ) {
    const userRepository = AppDataSource.getRepository(User);

    const existingUser = await userRepository.findOne({ where: { email } });
    if (existingUser) {
      throw new Error("Email já está sendo utilizado");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = userRepository.create({
      full_name,
      email,
      password: hashedPassword,
      role,
    });

    await userRepository.save(user);

    return user;
  }
}

export default new UserService();
