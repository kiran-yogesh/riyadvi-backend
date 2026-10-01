const mongoose = require('mongoose');

const leadMagnetLeadSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  company: { type: String, required: true, trim: true },
  email: { type: String, required: true, lowercase: true, trim: true },
  phone: { type: String, required: true, trim: true },
  resourceName: { type: String, default: 'Software Project Planning Guide' },
  status: { type: String, enum: ['new', 'access-granted', 'archived'], default: 'access-granted' }
}, { timestamps: true });

leadMagnetLeadSchema.index({ email: 1 });
leadMagnetLeadSchema.index({ createdAt: -1 });

module.exports = mongoose.model('LeadMagnetLead', leadMagnetLeadSchema, 'leadMagnetLeads');
