const express = require('express');
const router = express.Router();
const { getJobs, getJobBySlug } = require('../controllers/contentController');

router.get('/', getJobs);
router.get('/:slug', getJobBySlug);

module.exports = router;
