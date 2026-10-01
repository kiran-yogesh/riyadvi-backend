const LeadMagnetLead = require('../models/LeadMagnetLead');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { sendNotificationEmail } = require('../services/emailService');

const inMemoryLeadMagnets = [];

const downloadGuide = async (req, res, next) => {
  try {
    const { name, company, email, phone } = req.body;

    const payload = {
      name,
      company,
      email,
      phone,
      resourceName: 'Software Project Planning Guide',
      status: 'access-granted'
    };

    let doc;
    try {
      doc = await LeadMagnetLead.create(payload);
    } catch (dbErr) {
      payload._id = 'mem_lm_' + Date.now();
      payload.createdAt = new Date();
      inMemoryLeadMagnets.unshift(payload);
      doc = payload;
    }

    sendNotificationEmail('lead-magnet', payload);
    return res.status(201).json({
      success: true,
      message: 'Access granted! Your Software Project Planning Guide PDF download is ready.',
      downloadUrl: '/assets/Software_Project_Planning_Guide_Riyadvi.pdf',
      data: doc
    });
  } catch (error) {
    next(error);
  }
};

const getLeadMagnets = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let docs = [];
    let total = 0;

    try {
      total = await LeadMagnetLead.countDocuments();
      docs = await LeadMagnetLead.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    } catch (err) {
      total = inMemoryLeadMagnets.length;
      docs = inMemoryLeadMagnets.slice(skip, skip + limit);
    }

    return res.status(200).json({
      success: true,
      message: 'Lead magnet leads retrieved',
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

const getLeadMagnetById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await LeadMagnetLead.findById(id);
    } catch (err) {
      doc = inMemoryLeadMagnets.find(l => l._id === id);
    }

    if (!doc) {
      return errorResponse(res, 404, 'Lead magnet record not found');
    }
    return successResponse(res, 200, 'Lead magnet details', doc);
  } catch (error) {
    next(error);
  }
};

module.exports = { downloadGuide, getLeadMagnets, getLeadMagnetById, inMemoryLeadMagnets };
