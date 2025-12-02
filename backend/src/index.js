import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import earlyAccessRoutes from "./routes/earlyAccess.js";
import adminRoutes from "./routes/admin.js";

dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI, {
    dbName: process.env.MONGO_DB,  // IMPORTANT
  })
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

// Health Route
app.get("/api/health", (req, res) => {
  res.json({
    status: "Backend OK",
    time: new Date().toISOString(),
  });
});

// Debug route – shows collections
app.get("/debug/mongo", async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({
      status: "MongoDB OK",
      collections,
    });
  } catch (err) {
    res.status(500).json({
      status: "ERROR",
      error: err.message,
    });
  }
});

// Early Access Routes
app.use("/api/early-access", earlyAccessRoutes);

app.use("/api/admin", adminRoutes);
// Server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
