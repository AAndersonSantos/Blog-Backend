import { Request, Response } from "express";
import UserService from "../services/UserService";

class UserController {
  async createUser(req: Request, res: Response) {
    try {
      const { full_name, email, password, role } = req.body;

      const user = await UserService.createUser(
        full_name,
        email,
        password,
        role
      );

      res.status(201).json({
        id: user.id,
        full_name: user.full_name,
        email: user.email,
        role: user.role,
      });
      
    } catch (error) {
      const msg = (error as Error).message;
      res.status(400).json({ message: msg });
    }
  }
}

export default new UserController();
