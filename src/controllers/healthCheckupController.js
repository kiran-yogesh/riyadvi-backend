const HealthCheckupLead = require('../models/HealthCheckupLead');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { sendNotificationEmail } = require('../services/emailService');

const inMemoryHealthAudits = [];

const submitAudit = async (req, res, next) => {
  try {
    const { companyName, industry, contactPerson, email, phone, websiteUrl, marketingChallenges, techStackCurrent, primaryGoal } = req.body;

    const payload = {
      businessInformation: {
        companyName,
        industry: industry || 'Technology',
        contactPerson,
        email,
        phone
      },
      websiteDigitalPresence: {
        websiteUrl: websiteUrl || ''
      },
      marketing: {
        marketingChallenges: marketingChallenges || []
      },
      technology: {
        techStackCurrent: techStackCurrent || []
      },
      businessChallenges: {
        primaryGoal
      },
      status: 'new'
    };

    let doc;
    try {
      doc = await HealthCheckupLead.create(payload);
    } catch (dbErr) {
      payload._id = 'mem_hc_' + Date.now();
      payload.createdAt = new Date();
      inMemoryHealthAudits.unshift(payload);
      doc = payload;
    }

    sendNotificationEmail('health-checkup', payload);
    return successResponse(res, 201, 'Business Health Checkup submitted! Your customized technical audit report is being prepared.', doc);
  } catch (error) {
    next(error);
  }
};

const getHealthCheckups = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let docs = [];
    let total = 0;

    try {
      total = await HealthCheckupLead.countDocuments();
      docs = await HealthCheckupLead.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    } catch (err) {
      total = inMemoryHealthAudits.length;
      docs = inMemoryHealthAudits.slice(skip, skip + limit);
    }

    return res.status(200).json({
      success: true,
      message: 'Business Health Checkup leads retrieved',
      data: docs,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit) || 1
      }
    });
  } catch (error) {
    next(error);
  }
};

const getHealthCheckupById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await HealthCheckupLead.findById(id);
    } catch (err) {
      doc = inMemoryHealthAudits.find(h => h._id === id);
    }

    if (!doc) {
      return errorResponse(res, 404, 'Health checkup record not found');
    }
    return successResponse(res, 200, 'Health checkup details', doc);
  } catch (error) {
    next(error);
  }
};

const updateHealthCheckupStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    let doc;
    try {
      doc = await HealthCheckupLead.findByIdAndUpdate(id, { status }, { new: true });
    } catch (err) {
      const item = inMemoryHealthAudits.find(h => h._id === id);
      if (item) {
        item.status = status;
        doc = item;
      }
    }

    if (!doc) {
      return errorResponse(res, 404, 'Health checkup record not found');
    }
    return successResponse(res, 200, 'Health checkup status updated', doc);
  } catch (error) {
    next(error);
  }
};

module.exports = { submitAudit, getHealthCheckups, getHealthCheckupById, updateHealthCheckupStatus, inMemoryHealthAudits };
