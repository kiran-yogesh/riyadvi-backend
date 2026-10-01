const express = require('express');
const router = express.Router();
const { submitApplication, getApplications, getApplicationById, updateApplicationStatus } = require('../controllers/applicationController');
const { validateApplication } = require('../validators/leadValidators');
const { requireAdmin } = require('../middleware/authMiddleware');

router.post('/', validateApplication, submitApplication);

// Protected Admin-only Endpoints
router.get('/', requireAdmin, getApplications);
router.get('/:id', requireAdmin, getApplicationById);
router.patch('/:id/status', requireAdmin, updateApplicationStatus);

module.exports = router;
