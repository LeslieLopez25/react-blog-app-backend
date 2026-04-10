import express from "express";
import {
  createUser,
  getUser,
  updateUser,
  updatePassword,
  deleteUser,
} from "../Controllers/userController.js";

const router = express.Router();

router.post("/register", createUser);
router.get("/profile", getUser);
router.patch("/profile", updateUser);
router.patch("/profile/password", updatePassword);
router.delete("/profile", deleteUser);

export default router;
