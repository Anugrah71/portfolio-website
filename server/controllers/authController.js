import jwt from "jsonwebtoken";

export const adminLogin = async (req, res) => {
  try {
    const { password } = req.body;
    const expectedPassword = process.env.ADMIN_PASSWORD;

    if (!expectedPassword) {
      return res.status(500).json({
        success: false,
        message: "Server error: ADMIN_PASSWORD is not set in environment",
      });
    }

    if (!password) {
      return res.status(400).json({ success: false, message: "Password is required" });
    }

    if (password !== expectedPassword) {
      return res.status(401).json({ success: false, message: "Invalid admin password" });
    }

    const jwtSecret = process.env.JWT_SECRET;
    if (!jwtSecret) {
      return res.status(500).json({
        success: false,
        message: "Server error: JWT_SECRET is not set in environment",
      });
    }

    const token = jwt.sign(
      { role: "admin" },
      jwtSecret,
      { expiresIn: "7d" }
    );

    return res.status(200).json({
      success: true,
      message: "Admin authentication successful",
      token,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: error.message });
  }
};

export const verifyAdminToken = async (req, res) => {
  return res.status(200).json({ success: true, valid: true, admin: req.admin });
};
