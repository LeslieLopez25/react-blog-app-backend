import express from "express";
import {
  createTask,
  getTasksByProject,
  updateTask,
  deleteTask,
} from "../Controllers/taskController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.get("/project/:projectId", protect, getTasksByProject);
router.post("/project/:projectId", protect, createTask);
router.patch("/:taskId", protect, updateTask);
router.delete("/:taskId", protect, deleteTask);

export default router;
