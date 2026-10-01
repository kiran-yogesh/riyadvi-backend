const express = require('express');
const router = express.Router();
const { submitAudit, getHealthCheckups, getHealthCheckupById, updateHealthCheckupStatus } = require('../controllers/healthCheckupController');
const { validateHealthCheckup } = require('../validators/leadValidators');
const { requireAdmin } = require('../middleware/authMiddleware');

router.post('/', validateHealthCheckup, submitAudit);

// Protected Admin-only Endpoints
router.get('/', requireAdmin, getHealthCheckups);
router.get('/:id', requireAdmin, getHealthCheckupById);
router.patch('/:id/status', requireAdmin, updateHealthCheckupStatus);

module.exports = router;
