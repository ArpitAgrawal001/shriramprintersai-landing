import express from "express";
import EarlyAccess from "../models/EarlyAccess.js";

const router = express.Router();

// Middleware: check API key
function checkAdminKey(req, res, next) {
  const key = req.query.key;

  if (!key || key !== process.env.APP_SECRET) {
    return res.status(403).json({
      success: false,
      message: "Invalid or missing API key"
    });
  }

  next();
}

// GET admin list with pagination
router.get("/early-access/list", checkAdminKey, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;  
    const limit = parseInt(req.query.limit) || 20; 
    const skip = (page - 1) * limit;

    const total = await EarlyAccess.countDocuments();
    const entries = await EarlyAccess.find()
      .sort({ timestamp: -1 })
      .skip(skip)
      .limit(limit);

    return res.json({
      success: true,
      page,
      total,
      pages: Math.ceil(total / limit),
      entries
    });

  } catch (error) {
    console.error("❌ Admin List Error:", error);
    return res.status(500).json({ success: false, message: "Server error" });
  }
});

export default router;
