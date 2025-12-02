import express from 'express';
import EarlyAccess from '../models/EarlyAccess.js';

const router = express.Router();

router.post('/', async (req, res) => {
  console.log("🚀 POST /api/early-access HIT");
  console.log("📩 Request Body:", req.body);

  const { name, email, source } = req.body;

  if (!email) {
    console.log("❌ Missing email");
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    console.log("🔍 Checking existing email...");
    const existing = await EarlyAccess.findOne({ email });
    console.log("Existing Result:", existing);

    if (existing) {
      console.log("⚠️ Already registered");
      return res.status(200).json({ message: "Already registered" });
    }

    console.log("🆕 Creating new entry...");
    const newEntry = await EarlyAccess.create({ name, email, source });
    console.log("✅ Created new entry:", newEntry);

    return res.status(201).json({ message: "Successfully registered", data: newEntry });

  } catch (err) {
    console.error("🔥 ERROR IN ROUTE:", err);
    return res.status(500).json({ error: "Server error", details: err.message });
  }
});

export default router;
