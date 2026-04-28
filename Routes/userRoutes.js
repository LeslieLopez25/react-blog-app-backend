import express from "express";
import {
  getUser,
  updateUser,
  updatePassword,
  deleteUser,
} from "../Controllers/userController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", authMiddleware, getUser);
router.patch("/profile", authMiddleware, updateUser);
router.patch("/profile/password", authMiddleware, updatePassword);
router.delete("/profile", authMiddleware, deleteUser);

export default router;
