const mongoose = require('mongoose');

const careerApplicationSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  position: { type: String, required: true },
  resumeUrl: { type: String, required: true },
  message: { type: String, default: '' },
  status: { 
    type: String, 
    enum: ['submitted', 'reviewing', 'shortlisted', 'rejected', 'hired'], 
    default: 'submitted' 
  }
}, { timestamps: true });

careerApplicationSchema.index({ email: 1 });
careerApplicationSchema.index({ position: 1 });
careerApplicationSchema.index({ status: 1 });
careerApplicationSchema.index({ createdAt: -1 });

module.exports = mongoose.model('CareerApplication', careerApplicationSchema, 'careerApplications');
