const mongoose = require('mongoose');

const jobSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true, index: true },
  department: { type: String, required: true, index: true },
  designation: { type: String, required: true, index: true },
  location: { type: String, default: 'Hybrid / Remote' },
  experience: { type: String, required: true, index: true },
  employmentType: { type: String, default: 'Full-time' },
  description: { type: String, required: true },
  responsibilities: [String],
  requirements: [String],
  skills: [String],
  status: { type: String, enum: ['active', 'closed', 'draft'], default: 'active', index: true }
}, { timestamps: true });

jobSchema.index({ slug: 1, department: 1, designation: 1, experience: 1, status: 1 });

module.exports = mongoose.model('Job', jobSchema, 'jobs');
