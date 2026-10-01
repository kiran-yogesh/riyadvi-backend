const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const Admin = require('../models/Admin');
const { JWT_SECRET, ADMIN_EMAIL, ADMIN_PASSWORD } = require('../config/env');
const { successResponse, errorResponse } = require('../utils/apiResponse');

const ContactEnquiry = require('../models/ContactEnquiry');
const ConsultationRequest = require('../models/ConsultationRequest');
const HealthCheckupLead = require('../models/HealthCheckupLead');
const LeadMagnetLead = require('../models/LeadMagnetLead');
const CareerApplication = require('../models/CareerApplication');

const { inMemoryContacts } = require('./contactController');
const { inMemoryConsultations } = require('./consultationController');
const { inMemoryHealthAudits } = require('./healthCheckupController');
const { inMemoryLeadMagnets } = require('./leadMagnetController');
const { inMemoryApplications } = require('./applicationController');

const loginAdmin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return errorResponse(res, 400, 'Please enter both email and password.');
    }

    let adminUser = null;
    try {
      adminUser = await Admin.findOne({ email: email.toLowerCase() });
    } catch (dbErr) {
      adminUser = null;
    }

    const isMatch = adminUser 
      ? (adminUser.active && await bcrypt.compare(password, adminUser.passwordHash))
      : (email.toLowerCase() === ADMIN_EMAIL.toLowerCase() && password === ADMIN_PASSWORD);

    if (isMatch) {
      const payload = {
        id: adminUser ? adminUser._id : 'admin_default_id',
        email: email.toLowerCase(),
        role: adminUser ? adminUser.role : 'Admin'
      };

      const token = jwt.sign(payload, JWT_SECRET, { expiresIn: '24h' });

      return successResponse(res, 200, 'Admin authentication successful.', {
        token,
        admin: {
          id: payload.id,
          name: adminUser ? adminUser.name : 'Riyadvi Super Admin',
          email: payload.email,
          role: payload.role
        }
      });
    }

    return errorResponse(res, 401, 'Invalid admin email or password.');
  } catch (error) {
    next(error);
  }
};

const getDashboardStats = async (req, res, next) => {
  try {
    let enquiriesCount = 0;
    let consultationsCount = 0;
    let healthAuditsCount = 0;
    let leadMagnetsCount = 0;
    let applicationsCount = 0;

    try {
      enquiriesCount = await ContactEnquiry.countDocuments();
      consultationsCount = await ConsultationRequest.countDocuments();
      healthAuditsCount = await HealthCheckupLead.countDocuments();
      leadMagnetsCount = await LeadMagnetLead.countDocuments();
      applicationsCount = await CareerApplication.countDocuments();
    } catch (dbErr) {
      enquiriesCount = inMemoryContacts.length;
      consultationsCount = inMemoryConsultations.length;
      healthAuditsCount = inMemoryHealthAudits.length;
      leadMagnetsCount = inMemoryLeadMagnets.length;
      applicationsCount = inMemoryApplications.length;
    }

    return successResponse(res, 200, 'Dashboard statistics retrieved', {
      totalEnquiries: enquiriesCount,
      totalConsultations: consultationsCount,
      totalHealthAudits: healthAuditsCount,
      totalLeadMagnets: leadMagnetsCount,
      totalApplications: applicationsCount,
      totalLeads: enquiriesCount + consultationsCount + healthAuditsCount + leadMagnetsCount + applicationsCount
    });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginAdmin,
  getDashboardStats
};
