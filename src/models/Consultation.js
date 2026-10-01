const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  fullName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  preferredDate: { type: Date, required: true },
  budget: { type: String, default: 'Flexible' },
  description: { type: String, required: true },
  status: { type: String, enum: ['Pending', 'Scheduled', 'Completed', 'Cancelled'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('Consultation', consultationSchema);
