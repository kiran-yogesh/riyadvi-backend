const express = require('express');
const router = express.Router();
const { loginAdmin, getDashboardStats } = require('../controllers/adminController');
const { getContacts, updateContactStatus } = require('../controllers/contactController');
const { getConsultations, updateConsultationStatus } = require('../controllers/consultationController');
const { getHealthCheckups, updateHealthCheckupStatus } = require('../controllers/healthCheckupController');
const { getLeadMagnets } = require('../controllers/leadMagnetController');
const { getApplications, updateApplicationStatus } = require('../controllers/applicationController');
const {
  createService, updateService, deleteService,
  createPortfolio, updatePortfolio, deletePortfolio,
  createBlogPost, updateBlogPost, deleteBlogPost,
  createJob, updateJob, deleteJob
} = require('../controllers/contentController');
const { requireAdmin } = require('../middleware/authMiddleware');

// Auth
router.post('/login', loginAdmin);

// Dashboard
router.get('/dashboard', requireAdmin, getDashboardStats);
router.get('/stats', requireAdmin, getDashboardStats);

// Lead Management APIs
router.get('/contacts', requireAdmin, getContacts);
router.patch('/contacts/:id', requireAdmin, updateContactStatus);

router.get('/consultations', requireAdmin, getConsultations);
router.patch('/consultations/:id', requireAdmin, updateConsultationStatus);

router.get('/health-checkups', requireAdmin, getHealthCheckups);
router.patch('/health-checkups/:id', requireAdmin, updateHealthCheckupStatus);

router.get('/lead-magnets', requireAdmin, getLeadMagnets);

router.get('/applications', requireAdmin, getApplications);
router.patch('/applications/:id', requireAdmin, updateApplicationStatus);

// Combined leads overview
router.get('/leads', requireAdmin, async (req, res, next) => {
  try {
    const contactsRes = await new Promise(resolve => getContacts({ query: {} }, { status: () => ({ json: resolve }) }, next));
    const consultationsRes = await new Promise(resolve => getConsultations({ query: {} }, { status: () => ({ json: resolve }) }, next));
    const healthAuditsRes = await new Promise(resolve => getHealthCheckups({ query: {} }, { status: () => ({ json: resolve }) }, next));
    const leadMagnetsRes = await new Promise(resolve => getLeadMagnets({ query: {} }, { status: () => ({ json: resolve }) }, next));
    const applicationsRes = await new Promise(resolve => getApplications({ query: {} }, { status: () => ({ json: resolve }) }, next));

    return res.status(200).json({
      success: true,
      leads: {
        contacts: contactsRes?.data || [],
        consultations: consultationsRes?.data || [],
        healthAudits: healthAuditsRes?.data || [],
        leadMagnets: leadMagnetsRes?.data || [],
        applications: applicationsRes?.data || []
      }
    });
  } catch (error) {
    next(error);
  }
});

// CMS Content Management APIs (Protected by requireAdmin)
router.post('/services', requireAdmin, createService);
router.patch('/services/:id', requireAdmin, updateService);
router.delete('/services/:id', requireAdmin, deleteService);

router.post('/portfolio', requireAdmin, createPortfolio);
router.patch('/portfolio/:id', requireAdmin, updatePortfolio);
router.delete('/portfolio/:id', requireAdmin, deletePortfolio);

router.post('/blog', requireAdmin, createBlogPost);
router.patch('/blog/:id', requireAdmin, updateBlogPost);
router.delete('/blog/:id', requireAdmin, deleteBlogPost);

router.post('/jobs', requireAdmin, createJob);
router.patch('/jobs/:id', requireAdmin, updateJob);
router.delete('/jobs/:id', requireAdmin, deleteJob);

module.exports = router;
