const ConsultationRequest = require('../models/ConsultationRequest');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { sendNotificationEmail } = require('../services/emailService');

const inMemoryConsultations = [];

const createRequest = async (req, res, next) => {
  try {
    const { name, fullName, email, phone, company, service, requirement, preferredContactMethod, description, preferredDate } = req.body;

    const payload = {
      name: name || fullName || 'Valued Client',
      email,
      phone,
      company: company || 'N/A',
      service: service || 'General Consultation',
      requirement: requirement || 'Software Architecture',
      preferredContactMethod: preferredContactMethod || 'Video Call',
      message: description || requirement || 'Consultation request',
      preferredDate: preferredDate || new Date(),
      status: 'pending'
    };

    let doc;
    try {
      doc = await ConsultationRequest.create(payload);
    } catch (dbErr) {
      payload._id = 'mem_cons_' + Date.now();
      payload.createdAt = new Date();
      inMemoryConsultations.unshift(payload);
      doc = payload;
    }

    sendNotificationEmail('consultation', payload);
    return successResponse(res, 201, 'Consultation request received! Our solution architect will connect with you to confirm the schedule.', doc);
  } catch (error) {
    next(error);
  }
};

const getConsultations = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let docs = [];
    let total = 0;

    try {
      total = await ConsultationRequest.countDocuments();
      docs = await ConsultationRequest.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    } catch (err) {
      total = inMemoryConsultations.length;
      docs = inMemoryConsultations.slice(skip, skip + limit);
    }

    return res.status(200).json({
      success: true,
      message: 'Consultation requests retrieved',
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

const getConsultationById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await ConsultationRequest.findById(id);
    } catch (err) {
      doc = inMemoryConsultations.find(c => c._id === id);
    }

    if (!doc) {
      return errorResponse(res, 404, 'Consultation request not found');
    }
    return successResponse(res, 200, 'Consultation details', doc);
  } catch (error) {
    next(error);
  }
};

const updateConsultationStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    let doc;
    try {
      doc = await ConsultationRequest.findByIdAndUpdate(id, { status }, { new: true });
    } catch (err) {
      const item = inMemoryConsultations.find(c => c._id === id);
      if (item) {
        item.status = status;
        doc = item;
      }
    }

    if (!doc) {
      return errorResponse(res, 404, 'Consultation request not found');
    }
    return successResponse(res, 200, 'Consultation request status updated', doc);
  } catch (error) {
    next(error);
  }
};

module.exports = { createRequest, getConsultations, getConsultationById, updateConsultationStatus, inMemoryConsultations };
