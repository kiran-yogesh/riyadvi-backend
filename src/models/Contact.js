const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Name is required'], trim: true },
  email: { type: String, required: [true, 'Email is required'], lowercase: true, trim: true },
  phone: { type: String, required: [true, 'Phone number is required'], trim: true },
  company: { type: String, trim: true, default: 'N/A' },
  requirement: { 
    type: String, 
    required: [true, 'Requirement is required'],
    enum: ['Web Development', 'App Development', 'Digital Marketing', 'AR / VR', '3D Modeling', 'UI/UX Design', 'Other']
  },
  message: { type: String, required: [true, 'Message is required'] },
  status: { type: String, enum: ['New', 'Contacted', 'In Progress', 'Archived'], default: 'New' }
}, { timestamps: true });

module.exports = mongoose.model('Contact', contactSchema);
