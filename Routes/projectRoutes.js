import express from "express";
import {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../Controllers/projectController.js";
import { protect } from "../middleware/authMiddleware.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", protect, getAllProjects);
router.get("/:id", protect, getProjectById);
router.post("/", protect, uploadMiddleware.array("images", 5), createProject);
router.patch(
  "/:id",
  protect,
  uploadMiddleware.array("images", 5),
  updateProject,
);
router.delete("/:id", protect, deleteProject);

export default router;
