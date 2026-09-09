import express from "express";
import multer from "multer";
import {
  getActiveResume,
  getAllResumes,
  uploadResume,
  activateResume,
  deleteResume,
} from "../controllers/resumeController.js";
import { requireAdmin } from "../middleware/auth.js";

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 15 * 1024 * 1024 }, // 15MB limit
});

const router = express.Router();

// Public route for hero section
router.get("/active", getActiveResume);

// Admin routes
router.get("/all", requireAdmin, getAllResumes);
router.post("/upload", requireAdmin, upload.single("resume"), uploadResume);
router.patch("/:id/activate", requireAdmin, activateResume);
router.delete("/:id", requireAdmin, deleteResume);

export default router;
