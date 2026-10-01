const mongoose = require('mongoose');

const consultationRequestSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  company: { type: String, trim: true, default: 'N/A' },
  service: { type: String, default: 'General Consultation' },
  requirement: { type: String, default: 'Software Architecture' },
  preferredContactMethod: { type: String, enum: ['Email', 'Phone', 'Video Call'], default: 'Video Call' },
  message: { type: String, required: true },
  preferredDate: { type: Date },
  status: { 
    type: String, 
    enum: ['pending', 'scheduled', 'completed', 'cancelled'], 
    default: 'pending' 
  }
}, { timestamps: true });

consultationRequestSchema.index({ email: 1 });
consultationRequestSchema.index({ status: 1 });
consultationRequestSchema.index({ createdAt: -1 });

module.exports = mongoose.model('ConsultationRequest', consultationRequestSchema, 'consultationRequests');
