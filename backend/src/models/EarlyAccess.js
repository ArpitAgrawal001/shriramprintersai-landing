import mongoose from "mongoose";

const EarlyAccessSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,   // prevents duplicates
    lowercase: true,
  },
  organization: { type: String, default: "" },
  source: { type: String, default: "unknown" },
  timestamp: { type: Date, default: Date.now }
});

export default mongoose.model("EarlyAccess", EarlyAccessSchema);
