const express = require('express');
const router = express.Router();
const { downloadGuide, getLeadMagnets, getLeadMagnetById } = require('../controllers/leadMagnetController');
const { validateLeadMagnet } = require('../validators/leadValidators');
const { requireAdmin } = require('../middleware/authMiddleware');

router.post('/', validateLeadMagnet, downloadGuide);

// Protected Admin-only Endpoints
router.get('/', requireAdmin, getLeadMagnets);
router.get('/:id', requireAdmin, getLeadMagnetById);

module.exports = router;
