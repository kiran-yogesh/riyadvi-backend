const express = require('express');
const router = express.Router();
const { submitEnquiry, getContacts, getContactById, updateContactStatus } = require('../controllers/contactController');
const { validateContact } = require('../validators/leadValidators');
const { requireAdmin } = require('../middleware/authMiddleware');

router.post('/', validateContact, submitEnquiry);

// Protected Admin-only Endpoints
router.get('/', requireAdmin, getContacts);
router.get('/:id', requireAdmin, getContactById);
router.patch('/:id/status', requireAdmin, updateContactStatus);

module.exports = router;
