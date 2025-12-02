import express from "express";
import EarlyAccess from "../models/EarlyAccess.js";

const router = express.Router();

// Validation helper
function isValidEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

router.post("/", async (req, res) => {
  try {
    const { name, email, organization, source } = req.body;

    // 1️⃣ Validate input
    if (!name || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    if (!isValidEmail(email)) {
      return res.status(400).json({
        success: false,
        message: "Invalid email format",
      });
    }

    // 2️⃣ Check duplicate email
    const existing = await EarlyAccess.findOne({ email });

    if (existing) {
      return res.status(409).json({
        success: false,
        message: "Email already registered",
      });
    }

    // 3️⃣ Save user
    const entry = await EarlyAccess.create({
      name,
      email,
      organization: organization || "",
      source: source || "unknown",
    });

    return res.json({
      success: true,
      message: "Early access registered",
      data: entry,
    });

  } catch (err) {
    console.error("❌ Server Error:", err);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
});

export default router;
