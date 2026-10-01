const mongoose = require('mongoose');

const applicationSchema = new mongoose.Schema({
  positionTitle: { type: String, required: true },
  jobSlug: { type: String },
  applicantName: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  resumeUrl: { type: String, required: true },
  coverLetterMessage: { type: String, default: '' },
  status: { type: String, enum: ['Submitted', 'Under Review', 'Shortlisted', 'Rejected'], default: 'Submitted' }
}, { timestamps: true });

module.exports = mongoose.model('Application', applicationSchema);
