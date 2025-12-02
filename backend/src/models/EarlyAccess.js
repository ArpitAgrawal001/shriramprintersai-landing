import mongoose from 'mongoose';

const EarlyAccessSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String, required: true, unique: true },
  source: { type: String },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('EarlyAccess', EarlyAccessSchema);
