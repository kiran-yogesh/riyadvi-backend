const mongoose = require('mongoose');

const healthCheckupSchema = new mongoose.Schema({
  companyName: { type: String, required: true, trim: true },
  industry: { type: String, required: true },
  contactPerson: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  websiteUrl: { type: String, default: '' },
  marketingChallenges: [{ type: String }],
  techStackCurrent: [{ type: String }],
  primaryGoal: { type: String, required: true },
  status: { type: String, enum: ['Unread', 'In Review', 'Audit Sent'], default: 'Unread' }
}, { timestamps: true });

module.exports = mongoose.model('HealthCheckup', healthCheckupSchema);
