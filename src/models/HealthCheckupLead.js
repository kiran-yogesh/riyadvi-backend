const mongoose = require('mongoose');

const healthCheckupLeadSchema = new mongoose.Schema({
  businessInformation: {
    companyName: { type: String, required: true, trim: true },
    industry: { type: String, required: true },
    contactPerson: { type: String, required: true, trim: true },
    email: { type: String, required: true, lowercase: true, trim: true },
    phone: { type: String, required: true, trim: true }
  },
  websiteDigitalPresence: {
    websiteUrl: { type: String, default: '' }
  },
  marketing: {
    marketingChallenges: [{ type: String }]
  },
  technology: {
    techStackCurrent: [{ type: String }]
  },
  businessChallenges: {
    primaryGoal: { type: String, required: true }
  },
  status: { 
    type: String, 
    enum: ['new', 'unread', 'in-review', 'audit-sent'], 
    default: 'new' 
  }
}, { timestamps: true });

healthCheckupLeadSchema.index({ 'businessInformation.email': 1 });
healthCheckupLeadSchema.index({ status: 1 });
healthCheckupLeadSchema.index({ createdAt: -1 });

module.exports = mongoose.model('HealthCheckupLead', healthCheckupLeadSchema, 'healthCheckupLeads');
