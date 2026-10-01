const express = require('express');
const router = express.Router();

const { submitEnquiry, getContacts } = require('../controllers/contactController');
const { createRequest, getConsultations } = require('../controllers/consultationController');
const { submitAudit, getHealthCheckups } = require('../controllers/healthCheckupController');
const { downloadGuide, getLeadMagnets } = require('../controllers/leadMagnetController');
const { submitApplication, getApplications } = require('../controllers/applicationController');
const {
  getServices,
  getServiceBySlug,
  getPortfolio,
  getPortfolioBySlug,
  getBlogPosts,
  getBlogBySlug,
  getJobs,
  getJobBySlug
} = require('../controllers/contentController');
const { requireAdmin } = require('../middleware/authMiddleware');

// Public Lead Submission POST Endpoints
router.post('/contact', submitEnquiry);
router.post('/consultation', createRequest);
router.post('/health-checkup', submitAudit);
router.post('/lead-magnet', downloadGuide);
router.post('/applications', submitApplication);

// Protected Lead GET Endpoints
router.get('/contact', requireAdmin, getContacts);
router.get('/consultation', requireAdmin, getConsultations);
router.get('/health-checkup', requireAdmin, getHealthCheckups);
router.get('/lead-magnet', requireAdmin, getLeadMagnets);
router.get('/applications', requireAdmin, getApplications);

// Public Content GET Endpoints
router.get('/services', getServices);
router.get('/services/:slug', getServiceBySlug);

router.get('/portfolio', getPortfolio);
router.get('/portfolio/:slug', getPortfolioBySlug);

router.get('/blog', getBlogPosts);
router.get('/blog/:slug', getBlogBySlug);

router.get('/jobs', getJobs);
router.get('/jobs/:slug', getJobBySlug);

module.exports = router;
