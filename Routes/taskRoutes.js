import express from "express";
import {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask,
} from "../Controllers/taskController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/project/:projectId", authMiddleware, getTasksByProject);
router.post("/project/:projectId", authMiddleware, createTask);
router.patch("/:taskId", authMiddleware, updateTask);
router.delete("/:taskId", authMiddleware, deleteTask);

export default router;
