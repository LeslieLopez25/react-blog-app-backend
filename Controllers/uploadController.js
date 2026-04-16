import express from "express";
import { Router } from "express";
import cloudinary from "../utils/cloudinary";
import multer from "../middleware/uploadMiddleware";

const router = Router();

router.post("/upload", multer.single("image"), async (req, res) => {
  cloudinary.uploader.upload(req.file.path, (error, result) => {
    if (error) {
      console.log(error);
      res.status(500).json({ success: false, message: "Image upload failed" });
    }

    res
      .status(200)
      .json({ success: true, message: "Image uploaded", data: result });
  });
});

module.exports = router;
