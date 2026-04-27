import express from "express";
import {
  getUser,
  updateUser,
  updatePassword,
  deleteUser,
} from "../Controllers/userController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/profile", protect, getUser);
router.patch("/profile", protect, updateUser);
router.patch("/profile/password", protect, updatePassword);
router.delete("/profile", protect, deleteUser);

export default router;
