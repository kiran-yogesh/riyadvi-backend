const { body, validationResult } = require('express-validator');
const { errorResponse } = require('../utils/apiResponse');

const validateContact = [
  body('name').trim().notEmpty().withMessage('Name is required').isLength({ min: 2 }).withMessage('Name must be at least 2 characters'),
  body('email').trim().isEmail().withMessage('Valid email address is required').normalizeEmail(),
  body('phone').trim().notEmpty().withMessage('Phone number is required'),
  body('message').trim().notEmpty().withMessage('Message is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 400, 'Validation failed', errors.array());
    }
    next();
  }
];

const validateConsultation = [
  body('fullName').trim().notEmpty().withMessage('Full Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('description').trim().notEmpty().withMessage('Description is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 400, 'Validation failed', errors.array());
    }
    next();
  }
];

const validateHealthCheckup = [
  body('companyName').trim().notEmpty().withMessage('Company Name is required'),
  body('contactPerson').trim().notEmpty().withMessage('Contact Person is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('primaryGoal').trim().notEmpty().withMessage('Primary Goal is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 400, 'Validation failed', errors.array());
    }
    next();
  }
];

const validateLeadMagnet = [
  body('name').trim().notEmpty().withMessage('Name is required'),
  body('company').trim().notEmpty().withMessage('Company is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 400, 'Validation failed', errors.array());
    }
    next();
  }
];

const validateApplication = [
  body('positionTitle').trim().notEmpty().withMessage('Position Title is required'),
  body('applicantName').trim().notEmpty().withMessage('Applicant Name is required'),
  body('email').trim().isEmail().withMessage('Valid email is required'),
  body('phone').trim().notEmpty().withMessage('Phone is required'),
  body('resumeUrl').trim().isURL().withMessage('Valid Resume URL is required'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return errorResponse(res, 400, 'Validation failed', errors.array());
    }
    next();
  }
];

module.exports = {
  validateContact,
  validateConsultation,
  validateHealthCheckup,
  validateLeadMagnet,
  validateApplication
};
