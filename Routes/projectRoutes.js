import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../Controllers/projectController.js";
import { adminOnly, authMiddleware } from "../middleware/authMiddleware.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllProjects);
router.get("/:id", authMiddleware, getProjectById);
router.post(
  "/",
  authMiddleware,
  uploadMiddleware.array("images", 5),
  createProject,
);
router.patch(
  "/:id",
  authMiddleware,
  uploadMiddleware.array("images", 5),
  updateProject,
);
router.delete("/:id", authMiddleware, deleteProject);

export default router;
