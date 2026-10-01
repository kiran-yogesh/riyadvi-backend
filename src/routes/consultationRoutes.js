const express = require('express');
const router = express.Router();
const { createRequest, getConsultations, getConsultationById, updateConsultationStatus } = require('../controllers/consultationController');
const { validateConsultation } = require('../validators/leadValidators');
const { requireAdmin } = require('../middleware/authMiddleware');

router.post('/', validateConsultation, createRequest);

// Protected Admin-only Endpoints
router.get('/', requireAdmin, getConsultations);
router.get('/:id', requireAdmin, getConsultationById);
router.patch('/:id/status', requireAdmin, updateConsultationStatus);

module.exports = router;
