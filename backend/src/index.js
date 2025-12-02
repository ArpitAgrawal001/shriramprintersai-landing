const express = require("express");
const cors = require("cors");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const app = express();
app.use(cors());
app.use(express.json());

let db;

// Connect to MongoDB
async function connectDB() {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();
    db = client.db(process.env.MONGODB_DB);
    console.log("✅ MongoDB connected to database:", process.env.MONGODB_DB);
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
  }
}

connectDB();

// Routes
app.get("/api/health", (req, res) => {
  res.json({ status: "Backend OK", time: new Date().toISOString() });
});

app.post("/api/early-access", async (req, res) => {
  const { name, email, source } = req.body;

  try {
    const result = await db.collection("early_access").insertOne({
      name,
      email,
      source,
      timestamp: new Date(),
    });

    res.json({ success: true, insertedId: result.insertedId });
  } catch (err) {
    console.error("Insert Error:", err);
    res.status(500).json({ success: false, error: "Database Insert Error" });
  }
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("🚀 Backend running on port", PORT);
});
