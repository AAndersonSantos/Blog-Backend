import { Router } from "express";
import { login } from "../controllers/authController";
import UserController from "../controllers/userController";

const router = Router();

router.post("/login", login);
router.post("/register", UserController.createUser);

export default router;
