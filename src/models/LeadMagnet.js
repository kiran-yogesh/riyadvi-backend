const mongoose = require('mongoose');

const leadMagnetSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  resourceName: { type: String, default: 'Software Project Planning Guide' },
  accessGranted: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = mongoose.model('LeadMagnet', leadMagnetSchema);
