// backend/src/index.js
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const mongoURI = process.env.MONGO_URI;

import mongoose from "mongoose";
import earlyAccessRoutes from "./routes/earlyAccess.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("✅ MongoDB connected"))
.catch((err) => console.error("❌ MongoDB connection error:", err));

// Routes
app.get("/api/test-db", async (req, res) => {
  try {
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({ collections });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get("/debug/mongo", async (req, res) => {
  try {
    console.log("Running MongoDB test query...");
    const collections = await mongoose.connection.db.listCollections().toArray();
    res.json({
      status: "OK",
      collections
    });
  } catch (err) {
    console.log("❌ Mongo Debug Error:", err);
    res.status(500).json({ error: err.message });
  }
});


app.get("/api/health", (req, res) => res.json({ status: "Backend OK", time: new Date().toISOString() }));
app.use("/api/early-access", earlyAccessRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Backend running on port ${PORT}`));
