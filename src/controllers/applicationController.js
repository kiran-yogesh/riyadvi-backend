const CareerApplication = require('../models/CareerApplication');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { sendNotificationEmail } = require('../services/emailService');

const inMemoryApplications = [];

const submitApplication = async (req, res, next) => {
  try {
    const { name, applicantName, email, phone, position, positionTitle, resumeUrl, message, coverLetterMessage } = req.body;

    const payload = {
      name: name || applicantName,
      email,
      phone,
      position: position || positionTitle || 'Engineering Role',
      resumeUrl,
      message: message || coverLetterMessage || '',
      status: 'submitted'
    };

    let doc;
    try {
      doc = await CareerApplication.create(payload);
    } catch (dbErr) {
      payload._id = 'mem_app_' + Date.now();
      payload.createdAt = new Date();
      inMemoryApplications.unshift(payload);
      doc = payload;
    }

    sendNotificationEmail('application', payload);
    return successResponse(res, 201, 'Application submitted successfully! Our HR team will review your profile.', doc);
  } catch (error) {
    next(error);
  }
};

const getApplications = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let docs = [];
    let total = 0;

    try {
      total = await CareerApplication.countDocuments();
      docs = await CareerApplication.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    } catch (err) {
      total = inMemoryApplications.length;
      docs = inMemoryApplications.slice(skip, skip + limit);
    }

    return res.status(200).json({
      success: true,
      message: 'Career applications retrieved',
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

const getApplicationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await CareerApplication.findById(id);
    } catch (err) {
      doc = inMemoryApplications.find(a => a._id === id);
    }

    if (!doc) {
      return errorResponse(res, 404, 'Career application record not found');
    }
    return successResponse(res, 200, 'Career application details', doc);
  } catch (error) {
    next(error);
  }
};

const updateApplicationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    let doc;
    try {
      doc = await CareerApplication.findByIdAndUpdate(id, { status }, { new: true });
    } catch (err) {
      const item = inMemoryApplications.find(a => a._id === id);
      if (item) {
        item.status = status;
        doc = item;
      }
    }

    if (!doc) {
      return errorResponse(res, 404, 'Career application record not found');
    }
    return successResponse(res, 200, 'Application status updated', doc);
  } catch (error) {
    next(error);
  }
};

module.exports = { submitApplication, getApplications, getApplicationById, updateApplicationStatus, inMemoryApplications };
