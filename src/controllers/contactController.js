const ContactEnquiry = require('../models/ContactEnquiry');
const { successResponse, errorResponse } = require('../utils/apiResponse');
const { sendNotificationEmail } = require('../services/emailService');

const inMemoryContacts = [];

const submitEnquiry = async (req, res, next) => {
  try {
    const { name, email, phone, company, requirement, message } = req.body;

    const payload = {
      name,
      email,
      phone,
      company: company || 'N/A',
      requirement: requirement || 'Web Development',
      message,
      status: 'new'
    };

    let doc;
    try {
      doc = await ContactEnquiry.create(payload);
    } catch (dbErr) {
      payload._id = 'mem_c_' + Date.now();
      payload.createdAt = new Date();
      inMemoryContacts.unshift(payload);
      doc = payload;
    }

    sendNotificationEmail('contact', payload);
    return successResponse(res, 201, 'Thank you for reaching out! The Riyadvi team will contact you within 24 hours.', doc);
  } catch (error) {
    next(error);
  }
};

const getContacts = async (req, res, next) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;

    let docs = [];
    let total = 0;

    try {
      total = await ContactEnquiry.countDocuments();
      docs = await ContactEnquiry.find().sort({ createdAt: -1 }).skip(skip).limit(limit);
    } catch (err) {
      total = inMemoryContacts.length;
      docs = inMemoryContacts.slice(skip, skip + limit);
    }

    return res.status(200).json({
      success: true,
      message: 'Contact enquiries retrieved',
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

const getContactById = async (req, res, next) => {
  try {
    const { id } = req.params;
    let doc;
    try {
      doc = await ContactEnquiry.findById(id);
    } catch (err) {
      doc = inMemoryContacts.find(c => c._id === id);
    }

    if (!doc) {
      return errorResponse(res, 404, 'Contact enquiry not found');
    }
    return successResponse(res, 200, 'Contact enquiry details', doc);
  } catch (error) {
    next(error);
  }
};

const updateContactStatus = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { status } = req.body;

    let doc;
    try {
      doc = await ContactEnquiry.findByIdAndUpdate(id, { status }, { new: true });
    } catch (err) {
      const item = inMemoryContacts.find(c => c._id === id);
      if (item) {
        item.status = status;
        doc = item;
      }
    }

    if (!doc) {
      return errorResponse(res, 404, 'Contact enquiry not found');
    }
    return successResponse(res, 200, 'Contact enquiry status updated', doc);
  } catch (error) {
    next(error);
  }
};

module.exports = { submitEnquiry, getContacts, getContactById, updateContactStatus, inMemoryContacts };
