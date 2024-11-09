import { Request, Response } from "express";
import { AuthService } from "../services/authService";

const authService = new AuthService();

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await authService.login(email, password);
    res.json({ token });

  } catch (error) {
    const msg = (error as Error).message;
    res.status(400).json({ message: msg });
  }
};
