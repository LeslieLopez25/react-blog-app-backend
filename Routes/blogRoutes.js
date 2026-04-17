import express from "express";
import {
  createBlog,
  getAllBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../Controllers/blogController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import uploadMiddleware from "../middleware/uploadMiddleware.js";

const router = express.Router();

router.get("/", authMiddleware, getAllBlogs);
router.get("/:id", authMiddleware, getBlogById);
router.post(
  "/",
  authMiddleware,
  uploadMiddleware.array("images", 5),
  createBlog,
);
router.patch(
  "/:id",
  authMiddleware,
  uploadMiddleware.array("images", 5),
  updateBlog,
);
router.delete("/:id", authMiddleware, deleteBlog);

export default router;
