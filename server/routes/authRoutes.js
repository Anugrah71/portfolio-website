import express from "express";
import { adminLogin, verifyAdminToken } from "../controllers/authController.js";
import { requireAdmin } from "../middleware/auth.js";

const router = express.Router();

router.post("/login", adminLogin);
router.get("/verify", requireAdmin, verifyAdminToken);

export default router;
